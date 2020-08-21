#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
	float a, s, b;
	int i;
	char y;
	setlocale(0, "RUSSIAN");
	do
	{
		s = 1;
		b = 0;
		cout << "Введите a=";
		cin >> a;
		if (a >= 0)
		{
			for (i = 2; i <= 8; i += 2)
				s = s * i * i;
			s = s - a;
		}
		else
			for (i = 3; i <= 9; i += 3)
				s = s * (i - 2);
		if (modf(a, &b) == 0) cout << "S=" << fixed << setprecision(0) << s << endl;
		else
			cout << "S=" << fixed << setprecision(1) << s << endl;
		cout << "Продолжить работу? (y/n)" << endl;
		cin >> y;
	} while (y == 121);

	system("pause");
	return 0;
}
