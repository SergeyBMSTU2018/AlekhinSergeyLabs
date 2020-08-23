#include "Func.h"
#include <iostream>
#include <cmath>

using namespace std;

istream& operator>>(istream& s, Fraction& v)
{

	int cel = 0;
	char a;
	double a1;
	int a2 = 0;
	s >> a1;
	bool b = true;
	while (b)
	{
		s >> a;
		if (a == '/')
		{
			if (a1 == 0)
			{
				v.iSign = 0;
				v.iNumerator = 0;
				v.iDenominator = 1;
				return s;
			}
			else
			{
				if (a1 > 0) v.iSign = 1;
				else v.iSign = -1;
				s >> v.iDenominator;
				if (a2 == 0) v.iNumerator = abs(a1);
				else v.iNumerator = abs(a2 + a1 * v.iDenominator);
				return s;
			}
		}
		else
		{
			a2 = a2 * 10 + int(a) - 48;
		}
	}
	return s;
}




Fraction::Fraction()
{
	iSign = 0;
	iNumerator = 0;
	iDenominator = 1;
}
Fraction::Fraction(int numerator)
{
	if (numerator == 0)
	{
		iSign = 0;
		iNumerator = 0;
		iDenominator = 1;
	}
	else
	{
		if (numerator > 0) iSign = 1;
		else iSign = -1;
		iNumerator = abs(numerator);
		iDenominator = 1;
	}
}
Fraction::Fraction(int numerator, int denominator)
{
	if (denominator == 0) cout << "Знаменатель не может быть равен 0" << endl;
	else
	{
		if (numerator == 0)
		{
			iSign = 0;
			iNumerator = 0;
			iDenominator = 1;
		}
		else
		{
			if (numerator * denominator > 0) iSign = 1;
			else iSign = -1;
			iNumerator = abs(numerator);
			iDenominator = abs(denominator);
		}
	}
}
Fraction::Fraction(int sign, int numerator, int denominator)
{
	if (denominator == 0) cout << "Знаменатель не может быть равен 0" << endl;
	else
	{
		if (numerator * sign == 0)
		{
			iSign = 0;
			iNumerator = 0;
			iDenominator = 1;
		}
		else
		{
			if (numerator * denominator * sign > 0) iSign = 1;
			else iSign = -1;
			iNumerator = abs(numerator);
			iDenominator = abs(denominator);
		}
	}
}
Fraction::Fraction(char* text)
{
	int cel = 0;
	char a;
	double a1 = (int)text[0];
	int a2 = 0;
	int i = 1;
	bool b = true;
	while (b)
	{
		a = text[i];
		i++;
		if (a == '/')
		{
			if (a1 == 0)
			{
				iSign = 0;
				iNumerator = 0;
				iDenominator = 1;
				b = false;
			}
			else
			{
				if (a1 > 0) iSign = 1;
				else iSign = -1;
				iDenominator = (int)text[i];
				if (a2 == 0) iNumerator = abs(a1);
				else iNumerator = abs(a2 + a1 * iDenominator);
				b = false;
			}
		}
		else
		{
			a2 = a2 * 10 + int(a) - 48;
		}
		i++;
	}
}
Fraction::Fraction(double numerator)
{
	if (numerator == 0)
	{
		iSign = 0;
		iNumerator = 0;
		iDenominator = 1;
	}
	else
	{
		double b = abs(numerator - (int)numerator);
		int c = 0;
		while ((b - (int)b) != 0)
		{
			b *= 10;
			c++;
		}
		if (numerator > 0) iSign = 1;
		else iSign = -1;
		iNumerator = abs(numerator * pow(10, c));
		iDenominator = pow(10, c);
		int N = NOD(*this);
		iNumerator /= N;
		iDenominator /= N;
	}
}
Fraction::Fraction(int sign, double numerator)
{
	if (sign * numerator == 0)
	{
		iSign = 0;
		iNumerator = 0;
		iDenominator = 1;
	}
	else
	{
		double b = abs(numerator - (int)numerator);
		int c = 0;
		while ((b - (int)b) != 0)
		{
			b *= 10;
			c++;
		}
		if (numerator * sign > 0) iSign = 1;
		else iSign = -1;
		iNumerator = abs(numerator * pow(10, c));
		iDenominator = pow(10, c);
		int N = NOD(*this);
		iNumerator /= N;
		iDenominator /= N;
	}
}
Fraction::~Fraction()
{

}

Fraction& Fraction::operator+(Fraction& Mas)
{
	Fraction* F = new Fraction(*this);
	int num = (F->iNumerator * F->iSign * Mas.iDenominator) + (Mas.iNumerator * Mas.iSign * F->iDenominator);
	if (num == 0)
	{
		F->iSign = 0;
		F->iNumerator = 0;
		F->iDenominator = 1;
		return *F;
	}
	else
		if (num > 0) F->iSign = 1;
		else F->iSign = -1;
	F->iNumerator = abs(num);
	F->iDenominator *= Mas.iDenominator;
	int N = NOD(*F);
	F->iNumerator /= N;
	F->iDenominator /= N;
	return *F;
}
Fraction& Fraction::operator+(int a)
{
	Fraction Mas(a);
	Fraction* F = new Fraction(*this);
	return *F + Mas;
}
Fraction& Fraction::operator+(double a)
{
	Fraction Mas(a);
	Fraction* F = new Fraction(*this);
	return *F + Mas;
}

Fraction& Fraction::operator+=(Fraction& Mas)
{
	*this = *this + Mas;
	return *this;
}
Fraction& Fraction::operator+=(int a)
{
	Fraction Mas(a);
	*this = *this + Mas;
	return *this;
}
Fraction& Fraction::operator+=(double a)
{
	Fraction Mas(a);
	*this = *this + Mas;
	return *this;
}

Fraction& Fraction::operator-(Fraction& Mas)
{
	Fraction* F = new Fraction(*this);
	Mas.iSign *= -1;
	return *F + Mas;
}
Fraction& Fraction::operator-(int a)
{
	Fraction Mas(a);
	Fraction* F = new Fraction(*this);
	return *F + Mas;
}
Fraction& Fraction::operator-(double a)
{
	Fraction Mas(a);
	Fraction* F = new Fraction(*this);
	return *F + Mas;
}

Fraction& Fraction::operator-=(Fraction& Mas)
{
	return *this - Mas;
}
Fraction& Fraction::operator-=(int a)
{
	Fraction Mas(a);
	return *this - Mas;
}
Fraction& Fraction::operator-=(double a)
{
	Fraction Mas(a);
	return *this - Mas;
}

Fraction& Fraction::operator*(Fraction& Mas)
{
	Fraction* F = new Fraction(*this);
	F->iSign *= Mas.iSign;
	F->iNumerator *= Mas.iNumerator;
	F->iDenominator *= Mas.iDenominator;
	if (F->iNumerator * F->iSign == 0)
	{
		F->iSign = 0;
		F->iNumerator = 0;
		F->iDenominator = 1;
		return *F;
	}
	int N = NOD(*F);
	F->iNumerator /= N;
	F->iDenominator /= N;
	return *F;
}
Fraction& Fraction::operator*(int a)
{
	Fraction Mas(a);
	return *this + Mas;
}
Fraction& Fraction::operator*(double a)
{
	Fraction Mas(a);
	return *this * Mas;
}

Fraction& Fraction::operator*=(Fraction& Mas)
{
	return *this * Mas;
}
Fraction& Fraction::operator*=(int a)
{
	Fraction Mas(a);
	return *this * Mas;
}
Fraction& Fraction::operator*=(double a)
{
	Fraction Mas(a);
	return *this * Mas;
}

Fraction& Fraction::operator/(Fraction& Mas)
{
	Fraction* F = new Fraction(*this);
	Fraction Mas1(Mas);
	swap(Mas1.iNumerator, Mas1.iDenominator);
	if (Mas1.iDenominator == 0)
	{
		cout << "Деление на ноль" << endl;
		return *F;
	}
	*F = *F * Mas1;
	return *F;
}
Fraction& Fraction::operator/(int a)
{
	Fraction Mas(a);
	return *this / Mas;
}
Fraction& Fraction::operator/(double a)
{
	Fraction Mas(a);
	return *this / Mas;
}

Fraction& Fraction::operator/=(Fraction& Mas)
{
	return *this / Mas;
}
Fraction& Fraction::operator/=(int a)
{
	Fraction Mas(a);
	return *this / Mas;
}
Fraction& Fraction::operator/=(double a)
{
	Fraction Mas(a);
	return *this / Mas;
}

Fraction& Fraction::operator=(Fraction& Mas)
{
	this->iSign = Mas.iSign;
	this->iDenominator = Mas.iDenominator;
	this->iNumerator = Mas.iNumerator;
	return *this;
}
Fraction& Fraction::operator=(int a)
{
	Fraction Mas(a);
	this->iSign = Mas.iSign;
	this->iDenominator = Mas.iDenominator;
	this->iNumerator = Mas.iNumerator;
	return *this;
}
Fraction& Fraction::operator=(double a)
{
	Fraction Mas(a);
	this->iSign = Mas.iSign;
	this->iDenominator = Mas.iDenominator;
	this->iNumerator = Mas.iNumerator;
	return *this;
}

bool Fraction::operator>(Fraction Mas)
{
	Fraction F(*this - Mas);
	if (F.getSign() > 0) return true;
	else return false;
}
bool Fraction::operator>(int a)
{
	Fraction Mas(a);
	return *this > Mas;
}
bool Fraction::operator>(double a)
{
	Fraction Mas(a);
	return *this > Mas;
}

bool Fraction::operator<(Fraction Mas)
{
	Fraction F(*this - Mas);
	if (F.getSign() < 0) return true;
	else return false;
}
bool Fraction::operator<(int a)
{
	Fraction Mas(a);
	return *this < Mas;
}
bool Fraction::operator<(double a)
{
	Fraction Mas(a);
	return *this < Mas;
}

bool Fraction::operator>=(Fraction Mas)
{
	Fraction F(*this - Mas);
	if (F.getSign() >= 0) return true;
	else return false;
}
bool Fraction::operator>=(int a)
{
	Fraction Mas(a);
	return *this >= Mas;
}
bool Fraction::operator>=(double a)
{
	Fraction Mas(a);
	return *this >= Mas;
}

bool Fraction::operator<=(Fraction Mas)
{
	Fraction F(*this - Mas);
	if (F.getSign() <= 0) return true;
	else return false;
}
bool Fraction::operator<=(int a)
{
	Fraction Mas(a);
	return *this <= Mas;
}
bool Fraction::operator<=(double a)
{
	Fraction Mas(a);
	return *this <= Mas;
}

bool Fraction::operator==(Fraction Mas)
{
	Fraction F(*this - Mas);
	if (F.getSign() == 0) return true;
	else return false;
}
bool Fraction::operator==(int a)
{
	Fraction Mas(a);
	return *this == Mas;
}
bool Fraction::operator==(double a)
{
	Fraction Mas(a);
	return *this == Mas;
}

bool Fraction::operator!=(Fraction Mas)
{
	Fraction F(*this - Mas);
	if (F.getSign() != 0) return true;
	else return false;
}
bool Fraction::operator!=(int a)
{
	Fraction Mas(a);
	return *this != Mas;
}
bool Fraction::operator!=(double a)
{
	Fraction Mas(a);
	return *this != Mas;
}

int Fraction::NOD(Fraction Mas)
{
	int div;
	if (Mas.iNumerator == Mas.iDenominator)
		return Mas.iNumerator;
	int d = Mas.iNumerator - Mas.iDenominator;
	if (d < 0)
	{
		d *= -1;
		Mas.iDenominator = d;
		div = NOD(Mas);
	}
	else
	{
		Mas.iNumerator = d;
		div = NOD(Mas);
	}
	return div;
}

void Fraction::setSign(int sign)
{
	iSign = sign;
}
void Fraction::setNumerator(int numerator)
{
	iNumerator = numerator;
}
void Fraction::setDenominator(int denominator)
{
	iDenominator = denominator;
}
int Fraction::getSign()
{
	return iSign;
}
int Fraction::getNumerator()
{
	return iNumerator;
}
int Fraction::getDenominator()
{
	return iDenominator;
}


ostream& operator<<(ostream& Viv, Fraction& Mas)
{
	int iWholePart = Mas.iNumerator / Mas.iDenominator;
	int t = Mas.iNumerator - iWholePart * Mas.iDenominator;
	if (t == 0) Viv << Mas.iSign * iWholePart;
	else
	{
		Mas.iNumerator -= iWholePart * Mas.iDenominator;
		if (iWholePart == 0) Viv << Mas.iSign * Mas.iNumerator << '/' << Mas.iDenominator;
		else
			Viv << Mas.iSign * iWholePart << ' ' << Mas.iNumerator << '/' << Mas.iDenominator;
	}
	return Viv;
}

void swap(Fraction& Mas1, Fraction& Mas2)
{
	swap(Mas1.iSign, Mas2.iSign);
	swap(Mas1.iNumerator, Mas2.iNumerator);
	swap(Mas1.iDenominator, Mas2.iDenominator);
}

Fraction& operator+(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 + Mas2;
}
Fraction& operator+(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 + Mas2;
}

Fraction& operator-(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 - Mas2;
}
Fraction& operator-(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 - Mas2;
}

Fraction& operator*(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 * Mas2;
}
Fraction& operator*(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 * Mas2;
}

Fraction& operator/(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 / Mas2;
}
Fraction& operator/(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 / Mas2;
}

bool operator>(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 > Mas2;
}
bool operator>(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 > Mas2;
}

bool operator>=(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 >= Mas2;
}
bool operator>=(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 >= Mas2;
}

bool operator<(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 < Mas2;
}
bool operator<(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 < Mas2;
}

bool operator<=(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 <= Mas2;
}
bool operator<=(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 <= Mas2;
}

bool operator==(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 == Mas2;
}
bool operator==(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 == Mas2;
}

bool operator!=(int a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 != Mas2;
}
bool operator!=(double a, Fraction& Mas2)
{
	Fraction Mas1(a);
	return Mas1 != Mas2;
}