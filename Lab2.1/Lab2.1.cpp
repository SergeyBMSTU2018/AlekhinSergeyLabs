#include <iostream>
using namespace std;

int main()
{
	int n, m, s, k;
	char y;
	setlocale(0, "RUSSIAN");
	do
	{
		s = 0;
		k = 5;
		cout << "Введите n=";
		cin >> n;
		cout << "Введите m=";
		cin >> m;
		while (n != 0)
		{
			if ((k % 5 == 0) && (k % m != 0))
			{
				s += k;
				n--;
			}
			k += 5;
		}
		cout << "S=" << s << endl;
		cout << "Продолжить работу? (y/n)" << endl;
		cin >> y;
	} while (y == 121);

	system("pause");
	return 0;
}