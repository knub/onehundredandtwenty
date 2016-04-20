# -*- coding: utf-8 -*-

import urllib
import sys
import json
import re
import codecs

lehrformStrings = {
    "PS"    : [u"Projekt", u"Seminar"],
    "V"     : [u"Vorlesung"],
    "S"     : [u"Seminar"],
    "BS"    : [u"Seminar"],
    "SP"    : [u"Seminar", u"Projekt"],
    "VU"    : [u"Vorlesung", u"Übung"],
    "VP"    : [u"Vorlesung", u"Projekt"],
    "MP"    : False
    #more?
}

sskStrings = {
    "Kommunikation"         : u"SSKKO",
    "Schlüsselkompetenzen"  : u"SSKSK",
    "Management"            : u"SSKMA",
    "Recht"                 : u"SSKRE",
    "Design Thinking"       : u"SSKDT"
}

vertiefungStrings = {
    "Internet &amp; Security Technology"                            : u"IST",
    "Software Architecture &amp; Modeling Technology"               : u"SAMT",
    "Operating Systems &amp; Information Systems Technology"        : u"OSIS",
    "Business Process &amp; Enterprise Technology"                  : u"BPET",
    "Human Computer Interaction &amp; Computer Graphics Technology" : u"HCT"
}

itseStrings = {
    "IT-Systems Engineering A" : u"ITSE",
    "IT-Systems Engineering B" : u"ITSE",
    "IT-Systems Engineering C" : u"ITSE",
    "IT-Systems Engineering D" : u"ITSE"
}

def URLForSemester(semester):
    # returns list of courses for semester
    if semester == "now":
        url = "http://hpi.de/studium/lehrveranstaltungen/it-systems-engineering.html"
    else:
        year = int(semester.lstrip("wWsS"))
        if year > 99:
            print "You have been using this program far too long. Please start coding a new one."
        else:
            if semester.startswith("SS"):
                url = "http://hpi.de/studium/lehrveranstaltungen/archiv/sommersemester-20" + (str(year) if year >= 10 else "0" + str(year)) + ".html"
            else:
                if (year < 9):
                    url = "http://hpi.de/studium/lehrveranstaltungen/archiv/wintersemester-200" + str(year) + "0" + str(year+1) + ".html"
                elif (year == 9):
                    url = "http://hpi.de/studium/lehrveranstaltungen/archiv/wintersemester-200" + str(year) + str(year+1) + ".html"
                else:
                    url = "http://hpi.de/studium/lehrveranstaltungen/archiv/wintersemester-20" + str(year) + str(year+1) + ".html"
    return url


def URLsPerSemester(url):
    # return urls for courses
    site = urllib.urlopen(url)

    for line in site:
        if (line.strip().startswith("<h1>IT-Systems Engineering MA</h1>")):
            break
    pattern = re.compile(r"studium/lehrveranstaltungen/it\-systems\-engineering/lehrveranstaltung.*?\.html")
    urls = []
    for line in site:
        if (line.strip().startswith('<a class="courselink" href="')):
            urls += re.findall(pattern, line)

    return urls
    
def listOfLVs(urls):
    # returns dictionary of all courses
    lvs = {}
    i = 0
    for url in urls:
        lvDict = parseLVPage("http://www.hpi.de/" + url)
        if not (lvDict):
            continue
        lvs[lvDict['nameLV']] = lvDict
        i+=1
        print "Bisher wurden " + str(i) + " LVs gefunden."
    return lvs

def parseLVPage(url):
    # returns dictionary containing information about the course
    
    page = urllib.urlopen(url)
    for line in page:
        if (line.strip().startswith('<div class="tx-ciuniversity-course">')): #kennzeichnet die entsprechenden Informationen
            break
    
################################################################################
##                                                                            ##
##                    Detection of name and semester                          ##
##                                                                            ##
################################################################################

    line = page.next()

    headerPattern = re.compile("""w*(?<=\<h1\>)(.*?) \((Sommersemester) \d{2}(\d{2})|(Wintersemester) \d{2}(\d{2})/\d{2}(\d{2})\)(?=\<\/h1\>)""")
    headerfind = re.search(headerPattern, line)
    nameofLV = unicode(headerfind.group(1), encoding="utf-8")
    
    if (headerfind.group(2) == "Sommersemester"):
        semester = "ss" + headerfind.group(3)
    else:
        semester = "ws" + headerfind.group(3) + u"_" + headerfind.group(4)    
   
################################################################################
##                                                                            ##
##                    Detection of Dozents                                    ##
##                                                                            ##
################################################################################

    line = page.next()
   
    dozentenPattern = re.compile("""w*.*?\<i\>\<a.*?\>(.*?)\</a\>""")
    dozents = []
    while (line):
        if (line.strip().startswith("<br />")):
            break
        else:
            dozent = re.search(dozentenPattern, line)
            if (dozent):
                dozents.append(unicode(dozent.group(1), encoding="utf-8"))
        line = page.next()
    
################################################################################
##                                                                            ##
##                    Detection of ECTS Points                                ##
##                                                                            ##
################################################################################
    
    line = page.next()
    
    ectsPattern = re.compile("""w*\<li\>ECTS.*?(\d*?)\</li\>""")
    while (line):
        if (line.strip().startswith("<li>ECTS")):
            break
        line = page.next()
    ects = int(re.search(ectsPattern, line).group(1))
        
################################################################################
##                                                                            ##
##                    Detection if benotet or not                             ##
##                                                                            ##
################################################################################

    begin = False
    while (line):
        if not (begin):
            begin = line.strip().startswith("<li>Benotet")
        elif (line.strip()):
            benotet = (line.strip() == "Ja")
            break
        line = page.next()

################################################################################
##                                                                            ##
##                    Detection of Lehrform                                   ##
##                                                                            ##
################################################################################

    lehrformPattern = re.compile("""w*\<li\>Lehrform : (.*?)\</li\>""")
    while (line):
        lehrform = re.search(lehrformPattern, line)
        if (lehrform):
            lehrform = lehrformStrings[lehrform.group(1)]
            break
        line = page.next()
    
    if not (lehrform):
        return # Masterprojects are not included

################################################################################
##                                                                            ##
##                    Detection of Modules & Kennung                          ##
##                                                                            ##
################################################################################

    modulpattern = re.compile("""w*\<li\>(.*?)\</li\>""")
    begin = False
    modules = []
    while (line):
        if not (begin):
            begin = line.strip().startswith("<h2>Module</h2>")  # begin
        elif (line.strip()):
            module = re.search(modulpattern, line)
            if (module):
                modules.append(module.group(1))
            elif (line.strip() == "</ul>"):                     # end
                break
        line = page.next()
    
    kennung = set()
    modul = set()
    for module in modules:
        if (sskStrings.get(module)):
            kennung.add(sskStrings.get(module))
            modul.add("Softskills")
        elif (vertiefungStrings.get(module)):
            kennung.add(vertiefungStrings.get(module))
            modul.add("Vertiefungsgebiet")
        elif (itseStrings.get(module)):
            kennung.add(itseStrings.get(module))
            modul.add("IT-Systems Engineering")
    modul = list(modul)
    kennung = list(kennung)

################################################################################
##                                                                            ##
##                    Try to find good kurz                                   ##
##                                                                            ##
################################################################################

    maxLineLength = 20
    relevantWords = [x[:maxLineLength] for x in nameofLV.split(" ") if len(x) > 3 or x.upper() == x]
    kurz = ""
    i = 0
    while(i < 2):
        charCount = 0
        while (len(relevantWords) > 0):
            kurzWort = relevantWords.pop(0)
            if (len(kurzWort) <= maxLineLength - charCount):
                charCount += len(kurzWort)
                kurz += kurzWort + " "
            else:
                if(i == 0):
                    relevantWords = [kurzWort] + relevantWords
                    kurz += "<br />"
                break
        i += 1    

    # create dictionary for json serialization
    lv = {}
    lv['kurz'] = kurz
    lv['nameLV'] = nameofLV
    lv['semester'] = semester
    lv['dozent'] = dozents
    lv['kennung'] = kennung
    lv['cp'] = ects
    lv['benotet'] = benotet
    lv['modul'] = modul
    lv['lehrform'] = lehrform
    return lv

semester = raw_input("Please input the wanted semester: now OR (SS|WS)[0-9]{2}: ")
place = raw_input("Please input the name of the local file that the JSON dump should be written to: ")
dumpfile = codecs.open("./" + place, "w", encoding='utf-8')

lvs = listOfLVs(URLsPerSemester(URLForSemester(semester)))
dumpfile.write(json.dumps(lvs, ensure_ascii=False, indent=4))

dumpfile.close()
