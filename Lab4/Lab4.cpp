#include <iostream>
#include <iomanip>

using namespace std;

void s1up(int&, int&, int, int*);
void s1down(int&, int&, int, int*);
void s2up(int&, int&, int, int*);
void s2down(int&, int&, int, int*);
void out(int, int*);

int  main()
{
	srand(unsigned(time(0)));
	setlocale(0, "RUSSIAN");
	int c = 0, p = 0, n = 4;
	int* a, * b;

	a = new int[n];
	b = new int[n];

	for (int i = 0; i < n; i++)
	{
		a[i] = rand() % 101;
		b[i] = a[i];
	}

	out(n, a);
	out(n, b);

	s1up(c, p, n, a);
	cout << "Метод пузырька, по возрастанию " << "сравнений = " << c << " перестановок = " << p << endl << endl;
	out(n, a);

	s1up(c, p, n, a);
	cout << "Метод пузырька, по возрастанию " << "сравнений = " << c << " перестановок = " << p << endl << endl;
	out(n, a);

	s1down(c, p, n, a);
	cout << "Метод пузырька, по убыванию " << "сравнений = " << c << " перестановок = " << p << endl << endl;
	out(n, a);

	s2up(c, p, n, b);
	cout << "Метод min/max, по возрастанию " << "сравнений = " << c << " перестановок = " << p << endl << endl;
	out(n, b);

	s2up(c, p, n, b);
	cout << "Метод min/max, по возрастанию " << "сравнений = " << c << " перестановок = " << p << endl << endl;
	out(n, b);

	s2down(c, p, n, b);
	cout << "Метод min/max, по убыванию " << "сравнений = " << c << " перестановок = " << p << endl << endl;
	out(n, b);

	delete a;
	delete b;

	cout << "Оценка методов сортировки (По возрастанию)" << endl;
	cout << setw(16) << "1 метод" << setw(21) << "2 метод" << endl;

	for (n = 5; n <= 500; n *= 10)
	{
		a = new int[n];
		b = new int[n];

		for (int i = 0; i < n; i++)
		{
			a[i] = rand() % 101;
			b[i] = a[i];
		}

		s1up(c, p, n, a);
		cout << setw(3) << left << n << " c = " << setw(6) << left << c << " p = " << setw(5) << left << p;

		s2up(c, p, n, b);
		cout << " c = " << setw(6) << left << c << " p = " << setw(3) << left << p << endl;

		delete a;
		delete b;
	}

	system("pause");
	return 0;
}

void s1up(int& c, int& p, int n, int* a)
{
	c = 0; p = 0;
	int k = 0;
	for (int i = 0; i < n; i++)
	{
		k = 0;
		for (int j = i; j < n - 1; j++)
		{
			if (a[j] > a[j + 1])
			{
				swap(a[j], a[j + 1]);
				p++;
				k++;
			}
			c++;
		}
		if (k == 0) return;
	}
}

void s1down(int& c, int& p, int n, int* a)
{
	c = 0; p = 0;
	int k = 0;
	for (int i = 0; i < n - 1; i++)
	{
		k = 0;
		for (int j = 0; j < n - i - 1; j++)
		{
			if (a[j] < a[j + 1])
			{
				swap(a[j], a[j + 1]);
				p++;
				k++;
			}
			c++;
		}
		if (k == 0) return;
	}
}

void s2up(int& c, int& p, int n, int* b)
{
	c = 0; p = 0;
	int imin;
	for (int i = 0; i < n; i++)
	{
		imin = i;
		for (int j = i + 1; j < n; j++)
		{
			if (b[imin] > b[j])
				imin = j;
			c++;
		}
		if (i != imin)
		{
			swap(b[i], b[imin]);
			p++;
		}
	}

}

void s2down(int& c, int& p, int n, int* b)
{
	c = 0; p = 0;
	int imin;
	for (int i = 0; i < n; i++)
	{
		imin = i;
		for (int j = i + 1; j < n; j++)
		{
			if (b[imin] < b[j])
				imin = j;
			c++;
		}
		if (i != imin)
		{
			swap(b[i], b[imin]);
			p++;
		}
	}

}

void out(int n, int* a)
{
	cout << "Массив ";
	for (int i = 0; i < n; i++)
		cout << a[i] << ' ';
	cout << endl << endl;
}
