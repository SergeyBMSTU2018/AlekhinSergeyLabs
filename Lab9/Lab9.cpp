#include <iostream>
#include <fstream>
#include <cstring>
#include "Func.h"

using namespace std;

int main()
{
	system("chcp 1251");
	int i = 1;
	Dictionary* dict = new Dictionary[i];
	ifstream file;
	file.open("dictionary.txt");
	file >> dict[0].eng;
	file >> dict[0].rus;
	while (!file.eof())
	{
		dict = upsize(dict, i);
		file >> dict[i - 1].eng;
		file >> dict[i - 1].rus;
	}
	file.close();
	int numWords = i;
	sortChoice(dict, numWords);
	while (true) {
		switch (menu())
		{
		case 1: addWord(dict, numWords); cout << endl; system("pause"); system("cls"); break;
		case 2: delWord(dict, numWords); cout << endl; system("pause"); system("cls"); break;
		case 3: fromEngToRus(dict, numWords); cout << endl; system("pause"); system("cls"); break;
		case 4: fromRusToEng(dict, numWords); cout << endl; system("pause"); system("cls"); break;
		case 5: printDict(dict, numWords); cout << endl; system("pause"); system("cls"); break;
		case 6: toFile(dict, numWords); cout << endl; system("pause"); system("cls"); break;
		case 7: fromFile(); cout << endl; system("pause"); system("cls"); break;
		case 8: return 0;
		default: cout << " Надо вводить число от 1 до 7"; cout << endl; system("pause"); system("cls"); break;
		}
	}
	return 0;
}
