#include "Bus.h"
#include <iostream>
#include <list>
#include <fstream>

using namespace std;

void menu(list<Bus>& array)
{
	setlocale(LC_ALL, "RUS");

	cout << "1 - считываем текстовый файл\n"
		<< "2 - выход на маршрут\n"
		<< "3 - возвращение блудного сына\n"
		<< "4 - те кто там\n"
		<< "5 - те, кто здесь\n"
		<< "НУЖНО: ";

	int choice = 0, n;
	string s;
	ifstream fin;
	while (choice < 1 || choice > 5)
		cin >> choice;
	switch (choice)
	{
	default:
	case 1:
		cin >> s;
		fin.open(s);

		while (!fin.eof())
		{
			getline(fin, s);
			array.push_back(Bus(s));
		}

		break;

	case 2:
		cin >> n;

		for (auto i : array)
		{
			if (i.check(n))
			{
				i.transform(0);
			}
		}

		break;

	case 3:
		cin >> n;

		for (auto i : array)
		{
			if (i.check(n))
			{
				i.transform(1);
			}
		}

		break;

	case 4:
		for (auto i : array)
			if (i.check(0))
				cout << i;

		break;

	case 5:
		for (auto i : array)
			if (!i.check(0))
				cout << i;

		break;
	}
}