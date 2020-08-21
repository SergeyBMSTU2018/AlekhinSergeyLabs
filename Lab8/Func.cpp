#include <iostream>
#include <iomanip>
#include <algorithm>

using namespace std;

double** MatrixMult(double** dInitialMatrix, double** dInverseMatrix, int n)
{
	//Создание матрицы
	double** dMatrix = new double* [n];
	for (int i = 0; i < n; i++)
		dMatrix[i] = new double[n];
	//Обнуление матрицы
	for (int i = 0; i < n; i++)
		for (int j = 0; j < n; j++)
			dMatrix[i][j] = 0;
	//Нахождение произведения матриц
	for (int i = 0; i < n; i++)
		for (int j = 0; j < n; j++)
			for (int k = 0; k < n; k++)
				dMatrix[i][j] += dInitialMatrix[i][k] * dInverseMatrix[k][j];
	return dMatrix;
}

void print(double** dMatrix, int iOutputOption, int iNumBeforeDot, int iNumAfterDot, int iMatrixSize)
{
	int iColumn = 0, iNumLength, iNumColumnsInRow;
	if (iOutputOption == 1) iNumLength = iNumBeforeDot + iNumAfterDot + 2;
	else iNumLength = iNumAfterDot + 7;
	iNumColumnsInRow = floor(79 / (iNumLength));
	if (iNumColumnsInRow > iMatrixSize) iNumColumnsInRow = iMatrixSize;

	while (iColumn < iMatrixSize)
	{
		//for (int i = iColumn; i < min(iColumn + iNumColumnsInRow, iMatrixSize); i++)
		//	cout << setw(iNumLength) << i + 1 << ' ';
		//cout << endl << endl;
		for (int i = 0; i < iMatrixSize; i++)
		{
			for (int j = iColumn; j < min(iMatrixSize, iColumn + iNumColumnsInRow); j++)
			{
				if (iOutputOption == 1) cout << fixed << setw(iNumLength) << setprecision(iNumAfterDot) << dMatrix[i][j] << ' ';
				else cout << scientific << setw(iNumLength) << setprecision(iNumAfterDot) << dMatrix[i][j] << ' ';
			}
			cout << endl;
		}
		iColumn += iNumColumnsInRow;
		cout << endl;
	}
}

double** InverseMatrixCount(double** dMatrix, int n)
{
	double** dInverseMatrix = new double* [n];
	for (int i = 0; i < n; i++)
		dInverseMatrix[i] = new double[n];

	double A;
	int m;

	//Заполнение dInverseMatrix[n][n]
	for (int i = 0; i < n; i++)
		for (int j = 0; j < n; j++)
			if (i == j) dInverseMatrix[i][j] = 1;
			else dInverseMatrix[i][j] = 0;

	for (int i = 0; i < n; i++)
	{

		if (dMatrix[i][i] != 0)	A = dMatrix[i][i];
		else
		{

			//Если элемент главной диагонали нулевой, нахождение строки с ненулевым элементом
			m = -1;
			for (int j = i; j < n; j++)
			{
				if (dMatrix[j][i] != 0)
				{
					m = j;
					break;
				}
			}

			if (m == -1)
			{
				cout << "Обратная матрица не существует";
				return 0;
			}

			//Смена строк
			for (int j = 0; j < n; j++)
			{
				swap(dMatrix[i][j], dMatrix[m][j]);
				swap(dInverseMatrix[i][j], dInverseMatrix[m][j]);
			}

			A = dMatrix[i][i];
		}

		//Приведение элемента главной диагонали к 1
		for (int j = 0; j < n; j++)
		{
			dMatrix[i][j] /= A;
			dInverseMatrix[i][j] /= A;
		}

		//Приведение элементов под главной диагональю к 0 
		for (int j = i; j < n - 1; j++)
		{
			A = -dMatrix[j + 1][i];
			for (int k = 0; k < n; k++)
			{
				dMatrix[j + 1][k] += dMatrix[i][k] * A;
				dInverseMatrix[j + 1][k] += dInverseMatrix[i][k] * A;
			}
		}

	}

	//Приведение элементов над главной диагональю к 0
	for (int i = n - 1; i >= 0; i--)
	{
		for (int j = i; j >= 1; j--)
		{
			A = dMatrix[j - 1][i];
			for (int k = 0; k < n; k++)
			{
				dMatrix[j - 1][k] += dMatrix[i][k] * (-A);
				dInverseMatrix[j - 1][k] += dInverseMatrix[i][k] * (-A);
			}
		}
	}
	return dInverseMatrix;
}

