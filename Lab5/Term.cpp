#include "Term.h"
#include <iostream>
#include <string>

using namespace std;

istream& operator >> (istream& in, Term& a)
{
	cout << "Ведите Term: ";
	string term;
	getline(in, term);
	string o;
	int i;
	o = term.substr(0, term.find("x"));
	if (term.find("x") != string::npos)
		a.step = 1;
	else  a.step = 0;
	for (i = 0; i < o.length(); i++)
	{
		if (o[i] == ' ')
		{
			o.erase(i, 1);
		}
	}
	i = 0;
	if (o.find("-") != string::npos)
	{
		a.k = -1;
		o.erase(0, o.find("-") + 1);
		while ((i < o.length()) && (o[i] == ' '))
		{
			i++;
		}
		if (i == o.length())
		{
			a.k *= 1;
		}
		else a.k *= stoi(o, 0, 10);
	}
	else
	{
		while ((i < o.length()) && (o[i] == ' '))
		{
			i++;
		}
		if (i == o.length())
		{
			a.k = 1;
		}
		else a.k = stoi(o, 0, 10);
	}
	if (term.find("^") != string::npos)
	{
		o = term.substr(term.find("^") + 1, term.length());
		if (o.find("-") != string::npos)
		{
			a.step = -1;
			o.erase(0, o.find("-") + 1);
			a.step *= stoi(o);
		}
		else
			a.step = stoi(term.substr(term.find("^") + 1, term.length()));
	}
	return in;
}
ostream& operator << (ostream& out, Term& a)
{
	if (a.k == 0)
		out << ";";
	if ((a.step == 0) && a.k != 0)
	{
		out << a.k;
	}
	if (abs(a.k) == 1)
	{
		if (a.step == 1)
		{
			if (a.k > 0)
				out << "x";
			else out << "-x";
		}
		else
		{
			if (a.k > 0)
				out << "x^" << a.step;
			else out << "-x^" << a.step;
		}
	}
	if (a.step == 1 && a.k != 1)
	{
		out << a.k << "x";
	}
	if (a.step != 0 && abs(a.k) != 1 && a.k != 0 && a.step != 1)
		out << a.k << "x^" << a.step;
	return out;
}

Term::Term()
{
	k = 0;
	step = 0;
}
Term::Term(int n)
{
	k = n;
	step = 0;
}
Term::Term(int a, int b)
{
	k = a;
	step = b;
}

Term* Term::operator + (Term a)
{
	Term* c;
	c = new Term;
	c->k = k + a.k;
	if (c->k == 0)
		c->step = 0;
	else c->step = a.step;
	return c;
}
Term& Term::operator * (Term& a)
{
	Term* c;
	c = new Term;
	c->k = k * a.k;
	c->step = a.step + step;
	return *c;
}
Term& Term::operator = (Term& a)
{
	k = a.k;
	step = a.step;
	return *this;
}
