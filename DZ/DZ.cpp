#include "Bus.h"
#include <iostream>
#include <list>

using namespace std;

void menu(list<Bus>& array);

int main()
{
	list <Bus> array;
	while (1) {
		menu(array);
	}
}
