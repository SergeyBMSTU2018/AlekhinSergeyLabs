#include <iostream>
using namespace std;

int main()
{
	int h, m, vs, m1;
	setlocale(0, "Russian");
	h = -1;
	m = -1;
	cout << "Введите время!\n";
	cin >> h >> m;
	if (!((h >= 0 && h <= 23) && (m >= 0 && m <= 59)))
	{
		cout << "Неправильный ввод"; return 0;
	}
	if ((h == 0) && (m == 0))
	{
		cout << "Полночь"; return 0;
	}
	if ((h == 12) && (m == 0))
	{
		cout << "Полдень"; return 0;
	}
	if ((h >= 0) && (h < 6)) vs = 0;
	else
		if ((h >= 6) && (h < 12)) vs = 1;
		else
			if ((h >= 12) && (h < 18)) vs = 2;
			else vs = 3;
	if (h > 12) h -= 12;
	cout << h << " час";
	if (h >= 2 && h <= 4) cout << "а";
	if ((h >= 5 && h <= 12) || (h == 0)) cout << "ов";
	if (m != 0)
	{
		cout << ' ' << m << " минут";
		if (!(m >= 11 && m <= 19))
		{
			m1 = m % 10;
			if (m1 == 1) cout << "а";
			if (m1 >= 2 && m1 <= 4) cout << "ы";
		}
	}
	switch (vs)
	{
	case 0: cout << " ночи"; break;
	case 1: cout << " утра"; break;
	case 2: cout << " дня"; break;
	case 3: cout << " вечера"; break;
	}
	if (m == 0) cout << " ровно";

	cout << endl;

	system("pause");
	return 0;
}