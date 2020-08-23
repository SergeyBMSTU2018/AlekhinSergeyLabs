#include <iostream>
#include <iomanip>
#include <string>
#include "Func.h"
#include <fstream>
using namespace std;

void swap(Planets& Pmas1, Planets& Pmas2)
{
	swap(Pmas1.diameter, Pmas2.diameter);
	swap(Pmas1.satellites, Pmas2.satellites);
	swap(Pmas1.name, Pmas2.name);
	swap(Pmas1.life, Pmas2.life);
}

ofstream& operator<<(ofstream& s, Planets& Pmas)
{
	s << Pmas.getName() << " " << Pmas.getDiameter() << " " << Pmas.getLife() << " " << Pmas.getSatellites() << endl;
	return s;
}

ifstream& operator>>(ifstream& v, Planets& Pmas)
{
	string s;
	int i;
	bool b;
	short sh;
	v >> s >> i >> b >> sh;
	Pmas.setName(s);
	Pmas.setDiameter(i);
	Pmas.setLife(b);
	Pmas.setSatellites(sh);
	return v;
}

bool operator>(Planets Pmas1, Planets Pmas2)
{
	switch (Planets::colsort)
	{
	case 1:
		if (Pmas1.getName() > Pmas2.getName()) return true;
		else return false;
		break;
	case 2:
		if (Pmas1.getDiameter() > Pmas2.getDiameter()) return true;
		else return false;
		break;
	case 3:
		if (Pmas1.getLife() > Pmas2.getLife()) return true;
		else return false;
		break;
	case 4:
		if (Pmas1.getSatellites() > Pmas2.getSatellites()) return true;
		else return false;
		break;
	}
}

bool operator==(Planets Pmas1, Planets Pmas2)
{
	if ((Pmas1.getName() == Pmas2.getName()) && ((Pmas1.getDiameter() == Pmas2.getDiameter()) && (Pmas1.getLife() == Pmas2.getLife()) && (Pmas1.getSatellites() == Pmas2.getSatellites()))) return true;
	else return false;
}

Planets::Planets(Planets& Pmas1)
{
	this->name = Pmas1.name;
	this->diameter = Pmas1.diameter;
	this->life = Pmas1.life;
	this->satellites = Pmas1.satellites;
}

bool operator<(Planets Pmas1, Planets Pmas2)
{
	switch (Planets::colsort)
	{
	case 1:
		if (Pmas1.getName() < Pmas2.getName()) return true;
		else return false;
		break;
	case 2:
		if (Pmas1.getDiameter() < Pmas2.getDiameter()) return true;
		else return false;
		break;
	case 3:
		if (Pmas1.getLife() < Pmas2.getLife()) return true;
		else return false;
		break;
	case 4:
		if (Pmas1.getSatellites() < Pmas2.getSatellites()) return true;
		else return false;
		break;
	}
}

Planets& Planets::operator=(Planets& Pmas1)
{
	name = Pmas1.name;
	diameter = Pmas1.diameter;
	life = Pmas1.life;
	satellites = Pmas1.satellites;
	return *this;
}

Planets::Planets()
{
}

Planets::Planets(string s, int i, bool b, short sh)
{
	name = s;
	diameter = i;
	life = b;
	satellites = sh;
	cout << "В конец файла добавлен элемент" << endl;
}

Planets::~Planets()
{
}

Planets* IzFIle(int& n)
{
	ifstream PlanetsIn;
	PlanetsIn.open("Planets.txt");
	PlanetsIn >> n;
	Planets* Pmas = new Planets[n];
	for (int i = 0; i < n; i++)
		PlanetsIn >> Pmas[i];
	PlanetsIn.close();
	return Pmas;
}

void VFile(Planets* Pmas, int n)
{
	ofstream PlanetsOut;
	PlanetsOut.open("Planets.txt");
	//PlanetsOut.open("Planets.txt", ios_base::trunc);
	PlanetsOut << n << endl;
	for (int i = 0; i < n; i++)
		PlanetsOut << Pmas[i];
	PlanetsOut.close();
}

/*Planets *IzFIle(int &n)
{
	ifstream PlanetsIn;
	PlanetsIn.open("Planets.txt");
	PlanetsIn >> n;
	Planets *Pmas = new Planets[n];
	for (int i = 0; i < n; i++)
	{
		PlanetsIn >> Pmas[i].name;
		PlanetsIn >> Pmas[i].diameter;
		PlanetsIn >> Pmas[i].life;
		PlanetsIn >> Pmas[i].satellites;
	}
	PlanetsIn.close();
	return Pmas;
}*/

/*void VFile(Planets *Pmas, int n)
{
	ofstream PlanetsOut;
	PlanetsOut.open("Planets.txt");
	//PlanetsOut.open("Planets.txt", ios_base::trunc);
	PlanetsOut << n << endl;
	for (int i = 0; i < n; i++)
	{
		PlanetsOut << Pmas[i].name << ' ' << Pmas[i].diameter << ' ' << Pmas[i].life << ' ' << Pmas[i].satellites << endl;
	}
	PlanetsOut.close();
}*/

void menu(Planets*& Pmas, int& n, bool& b)
{
	cout << "Выберете пункт:" << endl;
	cout << "1) Сортировка БД;" << endl;
	cout << "2) Редактирование БД;" << endl;
	cout << "3) Вывод БД на экран;" << endl;
	cout << "4) Выход." << endl;
	int choice;
	cin >> choice;
	switch (choice)
	{
	case 1: sortMenu(Pmas, n);  break;
	case 2: editMenu(Pmas, n);  break;
	case 3: print(Pmas, n); break;
	case 4: b = false; break;
	}
}

void sortMenu(Planets* Pmas, int n)
{
	cout << "Выберите столбец для сортировки:" << endl;
	cout << "1) По имени;" << endl;
	cout << "2) По размеру;" << endl;
	cout << "3) По наличию жизни;" << endl;
	cout << "4) По кол-ву спутников." << endl;
	int choice;
	cin >> choice;
	sortOptMenu(Pmas, n, choice);
}

void sortOptMenu(Planets* Pmas, int n, int col)
{
	cout << "Выберите вариант сортировки:" << endl;
	cout << "1) По возрастанию;" << endl;
	cout << "2) По убыванию." << endl;
	int choice;
	cin >> choice;
	sortCol(Pmas, n, col, choice);
}

void sortCol(Planets* Pmas, int n, int col, int choice)
{
	int ind;
	Planets::colsort = col;
	for (int i = 0; i < n - 1; i++)
	{
		ind = i;
		for (int j = i + 1; j < n; j++)
			if (choice == 1)
			{
				if (Pmas[j] < Pmas[ind]) ind = j;
			}
			else
			{
				if (Pmas[j] > Pmas[ind]) ind = j;
			}
		swap(Pmas[i], Pmas[ind]);
	}
}

/*void sortCol(Planets* Pmas, int n, int col, int choice)
{
	int ind;
	string s1, s2;
	int i1 = 0, i2 = 0;
	bool b1 = false, b2 = false;
	short sh1 = 0, sh2 = 0;
	for (int i = 0; i < n - 1; i++)
	{
		ind = i;
		for (int j = i + 1; j < n; j++)
		{
			switch (col)
			{
			case 1: s1 = Pmas[j].name; s2 = Pmas[ind].name;
			case 2: i1 = Pmas[j].diameter; i2 = Pmas[ind].diameter; break;
			case 3: b1 = Pmas[j].life; b2 = Pmas[ind].life; break;
			case 4: sh1 = Pmas[j].satellites; sh2 = Pmas[ind].satellites; break;
			}
			if (choice == 1)
			{
				if ((s1 < s2) && col == 1) ind = j;
				if ((i1 < i2) && col == 2) ind = j;
				if ((b1 < b2) && col == 3) ind = j;
				if ((sh1 < sh2) && col == 4) ind = j;
			}
			else
			{
				if ((s1 > s2) && col == 1) ind = j;
				if ((i1 > i2) && col == 2) ind = j;
				if ((b1 > b2) && col == 3) ind = j;
				if ((sh1 > sh2) && col == 4) ind = j;
			}
		}
		swap(Pmas[i].diameter, Pmas[ind].diameter);
		swap(Pmas[i].satellites, Pmas[ind].satellites);
		swap(Pmas[i].name, Pmas[ind].name);
		swap(Pmas[i].life, Pmas[ind].life);
	}
}*/

void editMenu(Planets*& Pmas, int& n)
{
	cout << "Выберите вариант редактирования:" << endl;
	cout << "1) Добавление строки;" << endl;
	cout << "2) Удаление строки;" << endl;
	cout << "3) Редактирование строки." << endl;
	int choice;
	cin >> choice;
	switch (choice)
	{
	case 1: editLine(Pmas, n); break;
	case 2: delLineMenu(Pmas, n); break;
	case 3: editLineMenu(Pmas, n); break;
	}
}

void editLine(Planets*& Pmas, int& n)
{
	Pmas = upsize(Pmas, n);
	/*cout << "Введите название = ";
	editBD(Pmas[n - 1], 1);
	cout << "Введите диаметр = ";
	editBD(Pmas[n - 1], 2);
	cout << "Введите наличие жизни = ";
	editBD(Pmas[n - 1], 3);
	cout << "Введите количество спутников = ";
	editBD(Pmas[n - 1], 4);*/
}

/*Planets* upsize(Planets*& Pmas, int &n)
{
	Planets* buffer = new Planets[n + 1];
	for (int i = 0; i < n; i++)
	{
		buffer[i].name = Pmas[i].name;
		buffer[i].diameter = Pmas[i].diameter;
		buffer[i].life = Pmas[i].life;
		buffer[i].satellites = Pmas[i].satellites;
	}
	n++;
	delete[] Pmas;
	return buffer;
}*/

Planets* upsize(Planets*& Pmas, int& n)
{
	Planets* buffer = new Planets[n + 1];
	string s = "";
	int i = 0;
	bool b = 0;
	short sh = 0;
	cout << "Введите название = ";
	cin >> s;
	cout << "Введите диаметр = ";
	cin >> i;
	cout << "Введите наличие жизни = ";
	cin >> b;
	cout << "Введите количество спутников = ";
	cin >> sh;
	for (int i = 0; i < n; i++)
	{
		buffer[i].name = Pmas[i].name;
		buffer[i].diameter = Pmas[i].diameter;
		buffer[i].life = Pmas[i].life;
		buffer[i].satellites = Pmas[i].satellites;
	}
	n++;
	buffer[n - 1].name = s;
	buffer[n - 1].diameter = i;
	buffer[n - 1].life = b;
	buffer[n - 1].satellites = sh;
	delete[] Pmas;
	return buffer;
}

void delLineMenu(Planets*& Pmas, int& n)
{
	print(Pmas, n);
	cout << "Выберите строку для удаления:" << endl;
	int line;
	cin >> line;
	Pmas = downsize(Pmas, n, line - 1);
}

Planets* downsize(Planets*& Pmas, int& n, int line)
{
	Planets* buffer = new Planets[n - 1];
	for (int i = 0; i < line; i++)
	{
		buffer[i].name = Pmas[i].name;
		buffer[i].diameter = Pmas[i].diameter;
		buffer[i].life = Pmas[i].life;
		buffer[i].satellites = Pmas[i].satellites;
	}
	for (int i = line; i < n - 1; i++)
	{
		buffer[i].name = Pmas[i + 1].name;
		buffer[i].diameter = Pmas[i + 1].diameter;
		buffer[i].life = Pmas[i + 1].life;
		buffer[i].satellites = Pmas[i + 1].satellites;
	}
	n--;
	delete[] Pmas;
	return buffer;
}

void editLineMenu(Planets*& Pmas, int& n)
{
	print(Pmas, n);
	cout << "Выберите строку для редактирования:" << endl;
	int line;
	cin >> line;
	cout << "Выберите столбец для редактирования:" << endl;
	int col;
	cin >> col;
	cout << "Введите значение:" << endl;
	editBD(Pmas[line - 1], col);
}

void editBD(Planets& Pmas, int col)
{
	string s;
	int i;
	bool b;
	short sh;
	switch (col)
	{
	case 1: cin >> s; Pmas.setName(s); break;
	case 2: cin >> i; Pmas.setDiameter(i); break;
	case 3: cin >> b; Pmas.setLife(b); break;
	case 4: cin >> sh; Pmas.setSatellites(sh); break;
	}
}

void print(Planets* Pmas, int n)
{
	for (int i = 0; i < n; i++)
	{
		cout << i + 1 << ")";
		cout << setw(7) << left << Pmas[i].getName() << ' ';
		cout << setw(6) << Pmas[i].getDiameter() << ' ';
		cout << Pmas[i].getLife() << ' ';
		cout << Pmas[i].getSatellites() << endl;
	}
}