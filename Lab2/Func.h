#pragma once
#include <iostream>

using namespace std;

class Fraction
{
	friend istream& operator>>(istream&, Fraction&);
	friend ostream& operator<<(ostream&, Fraction&);
	friend void swap(Fraction&, Fraction&);

	friend Fraction& operator+(int, Fraction&);
	friend Fraction& operator+(double, Fraction&);

	friend Fraction& operator-(int, Fraction&);
	friend Fraction& operator-(double, Fraction&);

	friend Fraction& operator*(int, Fraction&);
	friend Fraction& operator*(double, Fraction&);

	friend Fraction& operator/(int, Fraction&);
	friend Fraction& operator/(double, Fraction&);

	friend bool operator>(int, Fraction&);
	friend bool operator>(double, Fraction&);

	friend bool operator>=(int, Fraction&);
	friend bool operator>=(double, Fraction&);

	friend bool operator<(int, Fraction&);
	friend bool operator<(double, Fraction&);

	friend bool operator<=(int, Fraction&);
	friend bool operator<=(double, Fraction&);

	friend bool operator==(int, Fraction&);
	friend bool operator==(double, Fraction&);

	friend bool operator!=(int, Fraction&);
	friend bool operator!=(double, Fraction&);
private:
	int iSign;
	int iNumerator;
	int iDenominator;
public:
	Fraction(); //������ ������� �������
	Fraction(int); //������� ������� ����������� ����������
	Fraction(int, int); //������� ������� ����������� ���������� � ������������
	Fraction(int, int, int); // ������� ������� ����������� ����������, ������������ � ������
	Fraction(double); // ������� ������� ������� ����������
	Fraction(int, double); //������� ������� ������ � ������� ���������� 
	Fraction(char*);
	~Fraction();

	Fraction& operator+(Fraction&);
	Fraction& operator+(int);
	Fraction& operator+(double);

	Fraction& operator+=(Fraction&);
	Fraction& operator+=(int);
	Fraction& operator+=(double);

	Fraction& operator-(Fraction&);
	Fraction& operator-(int);
	Fraction& operator-(double);

	Fraction& operator-=(Fraction&);
	Fraction& operator-=(int);
	Fraction& operator-=(double);

	Fraction& operator*(Fraction&);
	Fraction& operator*(int);
	Fraction& operator*(double);

	Fraction& operator*=(Fraction&);
	Fraction& operator*=(int);
	Fraction& operator*=(double);

	Fraction& operator/(Fraction&);
	Fraction& operator/(int);
	Fraction& operator/(double);

	Fraction& operator/=(Fraction&);
	Fraction& operator/=(int);
	Fraction& operator/=(double);

	Fraction& operator=(Fraction&);
	Fraction& operator=(int);
	Fraction& operator=(double);

	bool operator>(Fraction Mas);
	bool operator>(int);
	bool operator>(double);

	bool operator<(Fraction Mas);
	bool operator<(int);
	bool operator<(double);

	bool operator>=(Fraction Mas);
	bool operator>=(int);
	bool operator>=(double);

	bool operator<=(Fraction Mas);
	bool operator<=(int);
	bool operator<=(double);

	bool operator==(Fraction Mas);
	bool operator==(int);
	bool operator==(double);

	bool operator!=(Fraction Mas);
	bool operator!=(int);
	bool operator!=(double);

	int NOD(Fraction);

	void setSign(int);
	void setNumerator(int);
	void setDenominator(int);
	int getSign();
	int getNumerator();
	int getDenominator();
};

istream& operator>>(istream&, Fraction&);
ostream& operator<<(ostream&, Fraction&);
void swap(Fraction&, Fraction&);

Fraction& operator+(int, Fraction&);
Fraction& operator+(double, Fraction&);

Fraction& operator-(int, Fraction&);
Fraction& operator-(double, Fraction&);

Fraction& operator*(int, Fraction&);
Fraction& operator*(double, Fraction&);

Fraction& operator/(int, Fraction&);
Fraction& operator/(double, Fraction&);

bool operator>(int, Fraction&);
bool operator>(double, Fraction&);

bool operator>=(int, Fraction&);
bool operator>=(double, Fraction&);

bool operator<(int, Fraction&);
bool operator<(double, Fraction&);

bool operator<=(int, Fraction&);
bool operator<=(double, Fraction&);

bool operator==(int, Fraction&);
bool operator==(double, Fraction&);

bool operator!=(int, Fraction&);
bool operator!=(double, Fraction&);