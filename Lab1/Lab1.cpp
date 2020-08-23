#include "Func.h"
#include <iomanip>
#include <iostream>

using namespace std;

int Planets::colsort = 0;

void Planets::setName(string n)
{
	name = n;
}

void Planets::setDiameter(int d)
{
	diameter = d;
}

void Planets::setLife(bool l)
{
	life = l;
}

void Planets::setSatellites(short s)
{
	satellites = s;
}

string Planets::getName()
{
	return name;
}

int Planets::getDiameter()
{
	return diameter;
}

bool Planets::getLife()
{
	return life;
}

short Planets::getSatellites()
{
	return satellites;
}


int main()
{
	setlocale(0, "RUSSIAN");
	int n = 0;
	Planets* Pmas = IzFIle(n);
	bool b = true;
	while (b)
		menu(Pmas, n, b);
	VFile(Pmas, n);
	Planets A = Pmas[0], B;
	B = A;
	if (A == B) cout << "Yes" << endl;
	cout << setw(7) << left << A.getName() << ' ';
	cout << setw(6) << A.getDiameter() << ' ';
	cout << A.getLife() << ' ';
	cout << A.getSatellites() << endl;
	cout << setw(7) << left << B.getName() << ' ';
	cout << setw(6) << B.getDiameter() << ' ';
	cout << B.getLife() << ' ';
	cout << B.getSatellites() << endl;
	delete[]Pmas;
	return 0;
}
