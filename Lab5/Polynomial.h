#pragma once
#include "Term.h"
#include <iostream>
#include <string>

using namespace std;

class Polynom
{
	friend ostream& operator << (ostream&, Polynom&);
	friend istream& operator >> (istream&, Polynom&);
private:
	int n;
	Term* p;
	//bool order;
	void sort();
	bool ProverkaDowna(int);
	bool ProverkaST(Polynom&, int&, int&);
	bool Bolse(int, int);

public:
	Polynom();
	Polynom(int);
	Polynom(Term);
	Polynom(const Polynom&);
	~Polynom();
	Polynom& operator * (Polynom);
	Polynom& operator + (Polynom);
	Polynom& operator = (Polynom);
	Polynom& operator += (Polynom);
	Polynom& operator *= (Polynom);
};