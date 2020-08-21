#include <iostream>
#include <iomanip>
#include <fstream>
#include <cstring>
#include "Func.h"

using namespace std;

int menu()
{
	cout << "1)	добавление слов в словарь;" << endl << "2)	удаление слов из словар€; " << endl << "3)	перевод слов с английского на русский;" << endl;
	cout << "4)	перевод слов с русского на английский;" << endl << "5)	просмотр словар€;" << endl << "6)	вывод словар€ в файл;" << endl;
	cout << "7)	чтение словар€ из файла;" << endl << "8)	выход." << endl << "¬ведите номер команды, которую нужно выполнить: ";
	int choice;
	cin >> choice;
	return choice;
}

void sortChoice(Dictionary* dict, int i)
{
	int ind;
	int n = 0;
	for (int j = 0; j < (i - 1); j++) {
		ind = j;
		for (int k = (j + 1); k < (i); k++) {
			while (dict[ind].eng[n] == dict[k].eng[n]) n++;
			if (dict[ind].eng[n] > dict[k].eng[n])
			{
				ind = k;
			}
			n = 0;
		}
		swap(dict[ind].eng, dict[j].eng);
		swap(dict[ind].rus, dict[j].rus);

	}
}

void addWord(Dictionary*& dict, int& n)
{
	dict = upsize(dict, n);
	cout << "¬ведите слово на английском: ";
	cin >> dict[n - 1].eng;
	cout << "¬ведите слово на русском: ";
	cin >> dict[n - 1].rus;
	sortChoice(dict, n);
	cout << "√отово!";
}

void delWord(Dictionary*& dict, int& n)
{
	cout << "¬ведите слово на английском или русском, которое хотите удалить: ";
	char del[31];
	int ind;
	cin >> del;
	for (int i = 0; i < n; i++)
		if ((strcmp(del, dict[i].eng) == 0) || (strcmp(del, dict[i].rus) == 0))
		{
			strcpy_s(dict[i].eng, " ");
			strcpy_s(dict[i].rus, " ");
			ind = i;
			break;
		}
	if (ind == n)
	{
		cout << "“акого слова в словаре нет. Ќо вы можете его добавить, выбрав п.1 в меню!";
		return;
	}
	for (int i = ind; i < n - 1; i++)
	{
		for (int j = 0; j < 31; j++)
		{
			dict[i].eng[j] = dict[i + 1].eng[j];
			dict[i].rus[j] = dict[i + 1].rus[j];
		}
	}
	dict = downsize(dict, n);
	cout << "√отово!" << endl;
}

void printDict(Dictionary* dict, int n)
{
	int j = 0;
	for (int i = 0; i < n; i++)
	{
		cout << dict[i].eng << " - " << dict[i].rus << endl;
	}
}

Dictionary* upsize(Dictionary* dict, int& n)
{
	Dictionary* buffer = new Dictionary[n + 1];
	for (int i = 0; i < n; i++)
	{
		buffer[i] = dict[i];
	}
	delete[] dict;
	n++;
	return buffer;
}

Dictionary* downsize(Dictionary* dict, int& n)
{
	Dictionary* buffer = new Dictionary[n - 1];
	for (int i = 0; i < n - 1; i++)
	{
		buffer[i] = dict[i];
	}
	delete[] dict;
	n--;
	return buffer;
}

void fromEngToRus(Dictionary* dict, int n)
{
	char engWord[31];
	int ind, i;
	cout << "¬ведите слово, которое хотите перевести на русский: ";
	cin >> engWord;
	for (i = 0; i < n; i++)
	{
		if (strcmp(dict[i].eng, engWord) == 0)
		{
			cout << "ѕеревод слова " << dict[i].eng << " - " << dict[i].rus;
			break;
		}
	}
	if (i == n) cout << "“акого слова в словаре нет. Ќо вы можете его добавить, выбрав п.1 в меню!";
	cout << endl;
}

void fromRusToEng(Dictionary* dict, int n)
{
	char rusWord[31];
	int ind;
	cout << "¬ведите слово, которое хотите перевести на английский: ";
	cin >> rusWord;
	for (int i = 0; i < n; i++)
	{
		if (strcmp(dict[i].rus, rusWord) == 0)
		{
			cout << "ѕеревод слова " << dict[i].rus << " - " << dict[i].eng;
			ind = i;
			break;
		}
	}
	if (ind == n) cout << "“акого слова в словаре нет. Ќо вы можете его добавить, выбрав п.1 в меню!";
	cout << endl;
}

void fromFile()
{
	char eng[31];
	char rus[31];
	ifstream dictFile;
	dictFile.open("dictionary.txt");
	while (!dictFile.eof())
	{
		dictFile >> eng;
		dictFile >> rus;
		cout << eng << ' ' << "-" << ' ' << rus << endl;
	}
	dictFile.close();
	cout << "√отово!" << endl;
}

void toFile(Dictionary* dict, int n)
{
	ofstream dictFile;
	dictFile.open("dictionary.txt", ios_base::out);
	for (int i = 0; i < n; i++)
		dictFile << dict[i].eng << ' ' << dict[i].rus << endl;
	dictFile.close();
	cout << "√отово!" << endl;
}