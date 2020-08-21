#include <iostream>
#include <iomanip>
#include <cmath>
#include <algorithm>

using namespace std;

void print(double**, int, int, int, int, int);

int main()
{
	setlocale(0, "RUSSIAN");
	srand(time(0));
	int iNumColumns, iNumLines, iOutputOption, iNumBeforeDot, iNumAfterDot;
	cout << "Количество строк = ";
	cin >> iNumLines;
	cout << "Количество столбцов = ";
	cin >> iNumColumns;
	cout << "Количество знаков после запятой = ";
	cin >> iNumAfterDot;
	cout << "Количество знаков до запятой = ";
	cin >> iNumBeforeDot;

	//Создание динамического массива
	double** dMatrix = new double* [iNumLines];
	for (int i = 0; i < iNumLines; i++)
		dMatrix[i] = new double[iNumColumns];

	//Заполнение матрицы
	for (int i = 0; i < iNumLines; i++)
		for (int j = 0; j < iNumColumns; j++)
			dMatrix[i][j] = (double)rand() / RAND_MAX * (pow(10, iNumBeforeDot) - 0);

	//Выбор варианта вывода матрицы
	cout << "Выберите вариант вывода матрицы: 1)fixed 2)scientific = ";
	cin >> iOutputOption;

	//Вывод матрицы
	print(dMatrix, iOutputOption, iNumBeforeDot, iNumAfterDot, iNumLines, iNumColumns);

	//Удаление динамического массива
	for (int i = 0; i < iNumLines; i++)
		delete[] dMatrix[i];
	delete[] dMatrix;


	int x = 1, fact;
	cout << "Введите размер матрицы = ";
	cin >> iNumLines;
	cout << "Введите количество знаков после запятой = ";
	cin >> iNumAfterDot;

	//Создание динамического массива
	dMatrix = new double* [iNumLines];
	for (int i = 0; i < iNumLines; i++)
		dMatrix[i] = new double[iNumLines];

	//Заполнение матрицы А
	for (int i = 0; i < iNumLines; i++)
	{
		fact = 1;
		for (int j = 0; j < iNumLines; j++)
		{
			if (j != 0) fact *= j;
			if (i == j)
				dMatrix[i][j] = 1;
			else if (i < j)
				dMatrix[i][j] = pow(x, i) / pow(fact, i);
			else
				dMatrix[i][j] = pow(-x, i) / pow(fact, i);
		}
	}
	cout << "Матрица А" << endl;

	//Вывод матрицы А
	print(dMatrix, 1, 1, iNumAfterDot, iNumLines, iNumLines);


	const int iMatrixsize = 10;
	double B[10][10];

	//Заполнение матрицы B
	for (int i = 0; i < iMatrixsize; i++)
		for (int j = 0; j < iMatrixsize; j++)
			B[i][j] = 10 * i + j;

	//Создание матрицы
	dMatrix = new double* [iMatrixsize];

	//Переприваивание
	for (int i = 0; i < iMatrixsize; i++)
		dMatrix[i] = B[i];
	cout << "Матрица B" << endl;

	//Вывод матрицы
	print(dMatrix, 1, 1, 0, iMatrixsize, iMatrixsize);


	cout << B;
	cout << " " << B[2] + 4 << " " << B[1] << endl;
	cout << &B[3][5] << " " << **B + 1 << " " << *B[3] << endl;
	cout << *(*(B + 2)) << " " << *B[4] << endl;
	cout << *(B[3] + 1) << " " << *(*B + 2) << endl;
	cout << B[0][20] << " " << *(B[0] + 13) << " " << *B[1] << endl;

	system("pause");
	return 0;
}
