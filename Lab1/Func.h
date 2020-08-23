#pragma once
#include <string>
using namespace std;

class Planets
{
	friend void swap(Planets&, Planets&);
	friend Planets* upsize(Planets*&, int&);
	friend Planets* downsize(Planets*&, int&, int);
public:
	Planets& operator=(Planets&);
	static int colsort;
	Planets();
	Planets(string, int, bool, short);
	Planets(Planets&);
	~Planets();
	void setName(string);
	void setDiameter(int);
	void setLife(bool);
	void setSatellites(short);
	string getName();
	int getDiameter();
	bool getLife();
	short getSatellites();
private:
	string name;
	int diameter;
	bool life;
	short satellites;
};

bool operator==(Planets, Planets);
//void operator=(Planets &, Planets &);
ofstream& operator<<(ofstream&, Planets&);
ifstream& operator>>(ifstream&, Planets&);
bool operator>(Planets, Planets);
bool operator<(Planets, Planets);
Planets* IzFIle(int&);
void VFile(Planets*, int);
void menu(Planets*&, int&, bool&);
void sortMenu(Planets*, int);
void sortOptMenu(Planets*, int, int);
void sortCol(Planets*, int, int, int);
void editMenu(Planets*&, int&);
void editLine(Planets*& Pmas, int& n);
Planets* upsize(Planets*&, int&);
void delLineMenu(Planets*&, int&);
Planets* downsize(Planets*&, int&, int);
void editLineMenu(Planets*&, int&);
void editBD(Planets&, int);
void print(Planets*, int);



