#include "Polynomial.h"
#include "Term.h"
#include <iostream>
#include <string>

using namespace std;

ostream& operator << (ostream& out, Polynom& a)
{
	for (int i = a.n - 1; i >= 0; i--)
	{
		if (a.Bolse(i, 0))
		{
			out << "+" << a.p[i];
		}
		else
		{
			out << a.p[i];
		}
	}
	return out;
}
istream& operator >> (istream& in, Polynom& a)
{
	cout << "Ведите кол-во элементов многочлена: ";
	in >> a.n;
	in.ignore(1, '/n');
	int i;
	int k = 0;
	int j;
	Term c;
	a.p = new Term[a.n];
	for (i = 0; i < a.n; i++)
	{
		a.p[i] = c;
	}
	for (i = 0; i < a.n; i++)
	{
		in >> a.p[i - k];
		if (a.ProverkaDowna(i - k))
			k++;
	}
	a.n -= k;
	a.sort();
	return in;
}

void Polynom::sort()
{
	int m;//m-минимальный индекс;
	Term p1;// p-минимальное значение в массиве ;
	for (int i = 0; i < n - 1; i++)
	{
		p1 = p[i];
		m = i;
		for (int j = i + 1; j < n; j++)
		{

			if (p1.step > p[j].step)
			{
				p1 = p[j];
				m = j;
			}
		}
		if (m != i)
		{
			p[m] = p[i];
			p[i] = p1;
		}
	}
}
bool Polynom::ProverkaDowna(int i)
{
	for (int j = 0; j < i; j++)
	{
		if (p[j].step == p[i].step)
		{
			p[j].k += p[i].k;
			return true;
		}
	}
	return false;
}
bool Polynom::ProverkaST(Polynom& b, int& i, int& j)
{
	if (b.p[i].step == this->p[j].step)
		return true;
	else return false;
}
bool Polynom::Bolse(int i, int a)
{
	if (p[i].k > a)
		return true;
	else return false;
}

Polynom::Polynom()
{
	n = 6;
	p = new Term[n];
	Term b(0);
	for (int i = 0; i < 6; i++)
		p[i] = b;
}
Polynom::Polynom(int a)
{
	n = 6;
	p = new Term[n];
	p[0].k = a;
}
Polynom::Polynom(Term a)
{
	n = 6;
	p = new Term[n];
	p[0] = a;
}
Polynom::Polynom(const Polynom& a)
{
	this->n = a.n;
	p = new Term[n];
	for (int i = 0; i < n; i++)
	{
		p[i] = a.p[i];
	}
}
Polynom::~Polynom()
{
	delete[]p;
}

Polynom& Polynom::operator *(Polynom b)
{
	Polynom* c;
	c = new Polynom;
	c->n = n * b.n;
	int i, j, k = 0;
	for (i = 0; i < n; i++)
	{
		for (j = 0; j < b.n; j++)
		{
			c->p[j + b.n * i - k] = p[i] * b.p[j];
			if (c->ProverkaDowna(j + b.n * i - k))
			{
				k++;
			}
		}
	}
	c->n -= k;
	c->sort();
	return *c;
}
Polynom& Polynom::operator +(Polynom b)
{
	Polynom* c;
	c = new Polynom;
	Polynom d;
	c->n = n + b.n;
	int i;
	int j;
	int k = 0;
	if (b.n > n)
	{
		d = *this;
		*this = b;
		b = d;
	}
	for (i = 0; i < n; i++)
	{
		c->p[i] = p[i];
	}
	for (i = 0; i < b.n; i++)
	{
		for (j = 0; j < n; j++)
		{
			if (c->ProverkaST(b, i, j))
			{
				c->p[j] = *(c->p[j] + b.p[i]);
				break;
			}

		}
		if (j == n)
		{
			c->p[n + k] = b.p[i];
			k++;
		}
	}
	c->n = n + k;
	c->sort();
	return *c;
}
Polynom& Polynom::operator =(Polynom a)
{
	this->n = a.n;
	delete[]p;
	p = new Term[n];
	for (int i = 0; i < n; i++)
	{
		p[i] = a.p[i];
	}
	return *this;
}
Polynom& Polynom::operator +=(Polynom a)
{
	*this = *this + a;
	return *this;
}
Polynom& Polynom::operator *=(Polynom a)
{
	*this = *this * a;
	return *this;
}
