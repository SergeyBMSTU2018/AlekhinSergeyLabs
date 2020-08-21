#include <iostream>
#include <fstream>
#include <cstring>
#include <iomanip>

using namespace std;

int main()
{
	setlocale(0, "RUSSIAN");
	ifstream filecode;
	ifstream file1;
	ifstream file2in;
	ofstream file2out;
	ofstream file3;
	const int n = 256;
	char buff[256], cWord, cWord1, cWord2, y;
	int* iCodeTable, iCountWordfilecode, iLengthbuff, iCodeTableIndex, iWordCode, iWordIndex, iSum, jSum, max, c, iStatTable[n][n];

	//Нахождение кодовой таблицы
	filecode.open("kod.txt");
	//Нахождение количества слов
	filecode >> buff;
	iCountWordfilecode = 1;
	while (!filecode.eof())
	{
		iCountWordfilecode++;
		filecode >> buff;
	}

	//filecode.seekg(0, ios::beg);
	filecode.close();
	filecode.open("kod.txt");

	//Создание и обнуление массива кодов сдвига
	iCodeTable = new int[iCountWordfilecode];
	for (int i = 0; i < iCountWordfilecode; i++)
		iCodeTable[i] = 0;
	//Заполнение массива кодов сдвига
	filecode >> buff;
	iCodeTableIndex = 0;
	while (!filecode.eof())
	{
		iLengthbuff = strlen(buff);
		for (int i = 0; i < iLengthbuff; i++)
			iCodeTable[iCodeTableIndex] += (int)buff[i];
		iCodeTableIndex++;
		filecode >> buff;
	}

	filecode.close();

	cout << "Кодировать текст? (y/n)" << endl;
	cin >> y;
	if (y == 121)
	{
		//Кодирование текста
		file1.open("1.txt", ios::binary);
		file2out.open("2.txt", ios_base::out | ios::binary);

		iWordIndex = 0;
		file1.get(cWord);
		while (!file1.eof())
		{
			iWordCode = (iCodeTable[iWordIndex % iCountWordfilecode] + (int)cWord) % 256;
			file2out << (char)iWordCode;
			iWordIndex++;
			file1.get(cWord);
		}

		file1.close();
		file2out.close();
	}

	cout << "Декодировать текст? (y/n)" << endl;
	cin >> y;
	if (y == 121)
	{
		//Декодирование текста
		file2in.open("2.txt", ios::binary);
		file3.open("3.txt", ios_base::out | ios::binary);

		iWordIndex = 0;
		file2in.get(cWord);
		while (!file2in.eof())
		{
			iWordCode = ((int)cWord - iCodeTable[iWordIndex % iCountWordfilecode] % 256 + 256) % 256;
			file3 << (char)iWordCode;
			iWordIndex++;
			file2in.get(cWord);
		}

		file2in.close();
		file3.close();
	}

	cout << "Найти статистику? (y/n)" << endl;
	cin >> y;
	if (y == 121)
	{
		//Нахождение статистики
		for (int i = 0; i < n; i++)
			for (int j = 0; j < n; j++)
				iStatTable[i][j] = 0;

		file1.open("1.txt");
		file2in.open("2.txt");
		//Заполнение матрицы
		file1.get(cWord1);
		file2in.get(cWord2);
		while (!file1.eof())
		{
			iStatTable[(((int)cWord1 + 256) % 256) % n][(((int)cWord2 + 256) % 256) % n]++;
			file1.get(cWord1);
			file2in.get(cWord2);
		}
		//Вывод матрицы
		cout << "  ";
		for (int j = 0; j < n; j++)
		{
			jSum = 0;
			max = iStatTable[0][j];
			for (int k = 0; k < n; k++)
			{
				jSum += iStatTable[k][j];
				if (iStatTable[k][j] > max) max = iStatTable[k][j];
			}
			if (jSum == 0) continue;
			c = 0;
			while (max != 0)
			{
				max /= 10;
				c++;
			}
			cout << setw(c) << (char)j << ' ';
		}
		//cout << endl;

		for (int i = 0; i < n; i++)
		{
			iSum = 0;
			for (int k = 0; k < n; k++)
				iSum += iStatTable[i][k];
			if (iSum == 0) continue;
			cout << (char)i << ' ';
			for (int j = 0; j < n; j++)
			{
				jSum = 0;
				max = iStatTable[0][j];
				for (int k = 0; k < n; k++)
				{
					jSum += iStatTable[k][j];
					if (iStatTable[k][j] > max) max = iStatTable[k][j];
				}
				if (jSum == 0) continue;
				c = 0;
				while (max != 0)
				{
					max /= 10;
					c++;
				}
				cout << setw(c) << iStatTable[i][j] << ' ';
			}
			cout << endl;
		}
	}

	system("pause");
	return 0;
}