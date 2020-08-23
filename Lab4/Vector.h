#pragma once
#include <iostream>
using namespace std;
const int MAX_SIZE = 20;

class MyVector {
protected:
	int maxsize = 20;
	void resize();
public:
	string* pdata = new string[maxsize];
	int size = 0;
	MyVector(MyVector& v);
	MyVector(string el);
	MyVector();
	~MyVector();
	void add_element(string el);
	void delete_element(int);
	int getSize();
	int getMaxSize();
	void sort();
	int find(string el);
	string operator[](int i);
	MyVector& operator=(MyVector& v) {
		this->pdata = v.pdata;
		this->size = v.size;
		this->maxsize = v.maxsize;
		return *this;
	}
	friend ostream& operator<<(ostream& out, MyVector& v) {
		if (v.size > 0) {
			for (int i = 0; i < v.size; i++) {
				if (v[i] != "")
					out << v[i] << " ";
			}
		}
		else {
			cout << "null";
		}
		return out;
	}
};
