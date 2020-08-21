#pragma once

struct Dictionary
{
	char eng[31];
	char rus[31];
};

int menu();
void addWord(Dictionary*&, int&);
void printDict(Dictionary*, int);
Dictionary* upsize(Dictionary*, int&);
void sortChoice(Dictionary*, int);
void delWord(Dictionary*&, int&);
Dictionary* downsize(Dictionary*, int&);
void fromEngToRus(Dictionary*, int);
void fromRusToEng(Dictionary*, int);
void fromFile();
void toFile(Dictionary*, int);