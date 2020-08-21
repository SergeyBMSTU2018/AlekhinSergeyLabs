//вариант 1
//Слова текста из малых латинских букв записаны не менее чем через один пробел; текст оканчивается точкой.
//а) написать программу ввода такого текста с клавиатуры;
//б)Оставить в предложениях слова, отличающиеся от последнего слова предложения, перенеся в них первую букву в конец слова.
#include <conio.h>

using namespace std;

bool compair(char*, char*, int);

int main()
{
	//сh = cSymbol
	char cline[1000], cSymbol;
	int  iCharacterNum = 0, iMaxWordLength = -1, iNumWords = 0, iCurrentWordLength = 0, iCurrentCharacterLength = 0, i = 0, j = 0;
	//Заполнение одномерного массива
	do
	{
		cSymbol = _getch();
		if (((cSymbol <= 'z') && (cSymbol >= 'a')) || (cSymbol == ' '))
		{
			cline[iCharacterNum] = cSymbol;
			_putch(cSymbol);
			iCharacterNum++;
		}
		else
			if ((cSymbol == 8) && (iCharacterNum > 0))
			{
				iCharacterNum--;
				cline[iCharacterNum] = ' ';
				_putch(cSymbol);
				_putch(' ');
				_putch(cSymbol);
			}
	} while (cSymbol != '.');
	cline[iCharacterNum] = ' ';
	_putch('.');
	_putch('\n');

	//Нахождения количества слов, и максимальной длины слова
	for (i = 0; i < iCharacterNum + 1; i++)
	{
		if (cline[i] != ' ') iCurrentWordLength++;
		else
		{
			if (iMaxWordLength < iCurrentWordLength) iMaxWordLength = iCurrentWordLength;
			iCurrentWordLength = 0;
			if (cline[i - 1] != ' ') iNumWords++;
		}
	}
	if (cline[0] == ' ') iNumWords--;

	//Создание двумерного массива
	char** words = new char* [iNumWords];
	for (i = 0; i < iNumWords; i++)
		words[i] = new char[iMaxWordLength + 1];
	for (i = 0; i < iNumWords; i++)
		for (j = 0; j < iMaxWordLength; j++)
			words[i][j] = ' ';

	//Заполнение двумерного массива
	i = 0; j = 0;
	iCharacterNum = 0;
	while (i < iNumWords)
	{
		j = 0;
		while (cline[iCharacterNum] != ' ')
		{
			words[i][j] = cline[iCharacterNum];
			j++;
			iCharacterNum++;
		}
		if (cline[iCharacterNum] == ' ') iCharacterNum++;
		if (words[i][0] != ' ') i++;
	}

	for (i = 0; i < iNumWords - 1; i++)
		if (compair(words[i], words[iNumWords - 1], iMaxWordLength))
			words[i][0] = ' ';
	words[iNumWords - 1][0] = ' ';

	for (i = 0; i < iNumWords; i++)
	{
		if (words[i][0] != ' ')
		{
			iCurrentCharacterLength = 0;
			for (j = 0; j < iMaxWordLength; j++)
				if (words[i][j] != ' ') iCurrentCharacterLength++;
			words[i][iCurrentCharacterLength] = words[i][0];
			for (j = 1; j < iCurrentCharacterLength + 1; j++)
				_putch(words[i][j]);
			_putch(' ');
		}
	}
	_getch();
	return 0;
}

bool compair(char* a, char* b, int iMaxWordLength)
{
	for (int i = 0; i < iMaxWordLength; i++)
		if (a[i] != b[i]) return false;
	return true;
}