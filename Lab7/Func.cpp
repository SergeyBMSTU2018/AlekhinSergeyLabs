#include <iostream>
#include <iomanip>
#include <algorithm>

using namespace std;

void print(double** dMatrix, int iOutputOption, int iNumBeforeDot, int iNumAfterDot, int iNumLines, int iNumColumns)
{
	int iColumn = 0, iNumLength, iNumColumnsInRow;
	if (iOutputOption == 1) iNumLength = iNumBeforeDot + iNumAfterDot + 2;
	else iNumLength = iNumAfterDot + 6;
	iNumColumnsInRow = floor(79 / (iNumLength));
	if (iNumColumnsInRow > iNumColumns) iNumColumnsInRow = iNumColumns;

	while (iColumn < iNumColumns)
	{
		for (int i = iColumn; i < min(iColumn + iNumColumnsInRow, iNumColumns); i++)
			cout << setw(iNumLength) << i + 1 << ' ';
		cout << endl;
		for (int i = 0; i < iNumLines; i++)
		{
			for (int j = iColumn; j < min(iNumColumns, iColumn + iNumColumnsInRow); j++)
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