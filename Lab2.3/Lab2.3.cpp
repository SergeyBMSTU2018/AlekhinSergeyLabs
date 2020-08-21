#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main()
{
	int  n;
	double y, x, x1, s, eps = 0.000001;
	setlocale(0, "RUSSIAN");
	cout << setw(3) << 'x';
	cout << setw(10) << 'y';
	cout << setw(10) << 's';
	cout << setw(3) << 'n' << endl;
	for (x = 0; x <= 1; x += 0.2)
	{
		y = sin(x);
		s = x;
		n = 1;
		x1 = -(x * x) / (2 * n * (2 * n + 1)) * x;
		while (abs(x1) > eps)
		{
			s = s + x1;
			n++;
			x1 = -(x * x) / (2 * n * (2 * n + 1)) * x1;
		}
		cout << setw(3) << x;
		cout << setw(10) << y;
		cout << setw(10) << s;
		cout << setw(3) << n - 1 << endl;
	}

	system("pause");
	return 0;
}