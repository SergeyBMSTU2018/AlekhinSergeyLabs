#include "Bus.h"
#include <iostream>

Bus::Bus()
{
	number = 69;
	surname = "Petrov";
	name = "N";
	route = 69;
	condition = false;
}

Bus::Bus(string s)
{
	surname = s.substr(s.find(' ') + 1, s.find(' ', s.find(' ') + 1));
	// находим первый и второй пробел и все между ними в фамилию
	name = s.substr(s.find(' ', s.find(' ') + 1) + 1, s.rfind(' '));
	number = 0;
	route = 0;

	for (int i = 0; i < s.find(' '); i++)
	{
		number = 10 * number + s[i] - '0';
	}

	for (int i = s.rfind(' ') + 1; i < s.size(); i++)
	{
		route = 10 * route + s[i] - '0';
	}
	condition = false;
}

bool Bus::check(int n)
{
	if (n != 0)
		return number == n;
	return condition;
}

void Bus::transform(int i)
{
	if (i == 0)
		condition = true;
	else
		condition = false;
}

ostream& operator << (ostream& out, Bus point)
{
	cout << point.number << ' ' << point.surname << ' ' << point.name << ' ' << point.condition << endl;
	return out;
}