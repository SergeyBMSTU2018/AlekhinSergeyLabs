#include <iostream>
#include <iomanip>
#include <algorithm>

using namespace std;

void print(double**, int, int, int, int);
double** InverseMatrixCount(double**, int);
double** MatrixMult(double**, double**, int);

int main()
{
	setlocale(0, "RUSSIAN");
	double** dMatrix, ** dInitialMatrix, ** dInverseMatrix;
	int iMatrixSize, iNumAfterDot, iNumBeforeDot;
	cout << "Введите размер матрицы = ";
	cin >> iMatrixSize;

	//Создание dMatrix
	dMatrix = new double* [iMatrixSize];
	for (int i = 0; i < iMatrixSize; i++)
		dMatrix[i] = new double[iMatrixSize];

	//Создание dInitialMatrix
	dInitialMatrix = new double* [iMatrixSize];
	for (int i = 0; i < iMatrixSize; i++)
		dInitialMatrix[i] = new double[iMatrixSize];

	//Ввод матрицы А
	cout << "Введите матрицу A" << endl;
	for (int i = 0; i < iMatrixSize; i++)
		for (int j = 0; j < iMatrixSize; j++)
		{
			cin >> dMatrix[i][j];
			dInitialMatrix[i][j] = dMatrix[i][j];
		}
	//cout << endl;

	//Матрица А
	cout << "Количество знаков до запятой = ";
	cin >> iNumBeforeDot;
	cout << "Количество знаков после запятой = ";
	cin >> iNumAfterDot;
	cout << "Матрица А" << endl;
	print(dMatrix, 1, iNumBeforeDot, iNumAfterDot, iMatrixSize);

	//Нахождение обратной матрицы А^-1
	dInverseMatrix = InverseMatrixCount(dMatrix, iMatrixSize);
	if (dInverseMatrix == 0) return 0;
	for (int i = 0; i < iMatrixSize; i++)
		delete[] dMatrix[i];
	delete[]dMatrix;
	//Вывод обратной матрицы
	cout << "Количество знаков до запятой = ";
	cin >> iNumBeforeDot;
	cout << "Количество знаков после запятой = ";
	cin >> iNumAfterDot;
	cout << "Обратная матрица A" << endl;
	print(dInverseMatrix, 1, iNumBeforeDot, iNumAfterDot, iMatrixSize);

	//Произведение матриц
	dMatrix = MatrixMult(dInitialMatrix, dInverseMatrix, iMatrixSize);
	//Вывод произведения
	cout << "Произведение A * A^-1" << endl;
	print(dMatrix, 1, 0, 0, iMatrixSize);
	for (int i = 0; i < iMatrixSize; i++)
		delete[] dMatrix[i];
	delete[]dMatrix;

	for (int i = 0; i < iMatrixSize; i++)
		delete[] dInitialMatrix[i];
	delete[]dInitialMatrix;

	for (int i = 0; i < iMatrixSize; i++)
		delete[] dInverseMatrix[i];
	delete[]dInverseMatrix;

	system("pause");
	return 0;
}