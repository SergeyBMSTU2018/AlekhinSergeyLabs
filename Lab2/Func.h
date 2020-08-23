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
	Fraction(); //Пустое задание объекта
	Fraction(int); //задание объекта натуральным числителем
	Fraction(int, int); //задание объекта натуральным числителем и знаменателем
	Fraction(int, int, int); // задание объекта натуральным числителем, знаменателем и знаком
	Fraction(double); // задание объекта дробным числителем
	Fraction(int, double); //задание объекта знаком и дробным числителем 
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