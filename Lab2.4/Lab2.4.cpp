#include <iostream>
#include <math.h>
using namespace std;

int main()
{
	int i, n;
	float y, x, x1;
	char z;
	setlocale(0, "RUSSIAN");
	cout << "Введите x=";
	cin >> x;
	do
	{
		y = 1;
		x1 = 1;
		cout << "Введите n=";
		cin >> n;
		for (i = 1; i <= n; i++)
		{
			x1 = -(x * x) / (2 * i * (2 * i - 1)) * x1;
			y = y + x1;
			if ((i == 3) || (i == 5) || (i == 10)) cout << y << ' ';
		}
		cout << y << endl << endl << endl;
		cout << "Продолжить работу? (y/n)" << endl;
		cin >> z;
	} while (z == 121);

	system("pause");
	return 0;
}