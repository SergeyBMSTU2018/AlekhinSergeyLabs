#pragma once
#include <iostream>

using namespace std;

class Term
{
	friend class Polynom;
	friend istream& operator >> (istream&, Term&);
	friend ostream& operator << (ostream&, Term&);

private:
	int k;
	int step;

public:
	Term();
	Term(int);
	Term(int, int);
	Term* operator + (Term);
	Term& operator * (Term&);
	Term& operator = (Term&);
};
