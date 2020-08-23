#include "Vector.h"
using namespace std;
MyVector::MyVector(MyVector& v) {
	this->size = v.size;
	this->maxsize = v.maxsize;
	this->pdata = v.pdata;
}
MyVector::MyVector(string el) {
	pdata[0] = el;
	size++;
}
MyVector::MyVector() { }
MyVector::~MyVector() {
	delete[] this->pdata;
}
string MyVector::operator[](int i) {
	return pdata[i] + " ";
}
void MyVector::delete_element(int k) {
	if (size > 0) {
		string* buf = new string[size - 1]; if (k >= 0) {
			for (int i = k; i < size - 1; i++) {
				pdata[i] = pdata[i + 1];
			}
			size--;
			resize();
			for (int i = 0; i < size; i++) {
				buf[i] = pdata[i];
			}
			pdata = new string[size]; for (int i = 0; i < size; i++) {
				pdata[i] = buf[i];
			}
		}
	}
}
void MyVector::add_element(string el) {
	size++;
	resize();
	string* buf = new string[size];
	for (int i = 0; i < size - 1; i++) {
		buf[i] = pdata[i];
	}
	buf[size - 1] = el;
	pdata = new string[maxsize];
	for (int i = 0; i < size; i++) {
		pdata[i] = buf[i];
	}
}
void MyVector::resize() {
	const int resizeValue = 2;
	if (size >= maxsize) {
		maxsize *= resizeValue;
	}
	else if (size<maxsize / 2 && (maxsize / 2)>MAX_SIZE) {
		maxsize /= resizeValue;
	}
}
int MyVector::find(string el) {
	for (int i = 0; i < size; i++) {
		if (pdata[i] == el) {
			return i;
		}
	}
	return -1;
}
int MyVector::getSize() {
	return size;
}
int MyVector::getMaxSize() {
	return maxsize;
}
void MyVector::sort() {
	string o;
	int h;
	for (int j = size - 1; j > 0; j--) {
		h = 0;
		for (int i = 0; i < j; i++) {
			if (atoi(this->pdata[i].data()) != 0 && atoi(this->pdata[i + 1].data()) != 0) {
				if (std::atoi(this->pdata[i].data()) > std::atoi(this->pdata[i + 1].data())) {
					o = pdata[i];
					pdata[i] = pdata[i + 1]; pdata[i + 1] = o;
					h++;
				}
			}
			else if (this->pdata[i] > this->pdata[i + 1]) {
				o = pdata[i];
				pdata[i] = pdata[i + 1];
				pdata[i + 1] = o;
				h++;
			}
		}
		if (h == 0) {
			for (int i = 0; i < size - 1; i++) {
				if (pdata[i] == pdata[i + 1]) {
					this->delete_element(i);
				}
			}
			break;
		}
	}
}