#pragma once
#include <string>

using namespace std;

class Bus
{
private:
	int number;
	string surname, name;
	int route;
	bool condition;
public:
	Bus();
	Bus(string s);

	bool check(int n);
	void transform(int i);

	friend ostream& operator << (ostream& out, Bus point);
};

