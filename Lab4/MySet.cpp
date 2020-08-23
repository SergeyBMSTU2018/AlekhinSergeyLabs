#include "MySet.h"

MySet::MySet() {
}
MySet::MySet(string el) {
	this->pdata[0] = el; this->size = 1; this->maxsize = 5;
}
MySet::MySet(const MySet& mySet) {
	for (int i = 0; i < mySet.size; i++) {
		this->pdata[i] = mySet.pdata[i];
	}
	//this->pdata = mySet.pdata; 
	this->maxsize = mySet.maxsize;
	this->size = mySet.size;
}
MySet& MySet::operator = (const MySet& s) {
	this->size = s.size;
	for (int i = 0; i < s.size; i++) {
		this->pdata[i] = s.pdata[i];
	}
	//this->pdata = s.pdata; 
	this->maxsize = s.maxsize;
	return *this;
}
MySet operator + (MySet& s1, MySet& s2) {
	MySet buf;
	for (int i = 0; i <= s1.size; i++) {
		buf.add_element(s1[i]);
	}
	for (int i = 0; i <= s2.size; i++) {
		if (!buf.is_element(s2[i])) {
			buf.add_element(s2[i]);
		}
	}
	return buf;
}
MySet operator - (MySet& s1, MySet& s2) {
	MySet buf;
	for (int i = 0; i < s1.size; i++) {
		if (!s2.is_element(s1[i])) {
			buf.add_element(s1[i]);
		}
	}
	return buf;
}
MySet operator*(MySet& s1, MySet& s2) {
	MySet buf;
	for (int i = 0; i < s1.size; i++) {
		if (s2.is_element(s1[i])) {
			buf.add_element(s1[i]);
		}
	}
	return buf;
}
MySet& MySet::operator-=(MySet& s) {
	for (int i = 0; i <= s.size; i++) {
		if (this->is_element(s[i])) {
			this->delete_element(s[i]);
		}
	}
	return *this;
}
MySet& MySet::operator+=(MySet& s) {
	for (int i = 0; i <= s.size; i++) {
		if (!this->is_element(s[i])) {
			this->add_element(s[i]);
		}
	}
	return *this;
}
MySet& MySet::operator*=(MySet& s) {
	MySet buf;
	for (int i = 0; i < s.size; i++) {
		if (this->is_element(s[i])) {
			buf.add_element(s[i]);
		}
	} *this = buf;
	return *this;
}
bool MySet::operator==(MySet& s) {
	int res = 0;
	if (this->size == s.size) {
		for (int i = 0; i < s.size; i++) {
			if (this->is_element(s[i])) {
				res++;
			}
		}
		if (res == size)return true;
	}
	else return false;
}
void MySet::delete_element(string el) {
	string st = el.substr(0, el.size() - 1);
	int a = find(st);
	if (a != -1) {
		string* buf = new string[size - 1];
		for (int i = a; i < size - 1; i++) {
			pdata[i] = pdata[i + 1];
		} size--;
		resize();
		for (int i = 0; i < size; i++) {
			buf[i] = pdata[i];
		} pdata = new string[size];
		for (int i = 0; i < size; i++) {
			pdata[i] = buf[i];
		}
	}
	sort();
}
bool MySet::is_element(string el) {
	string st = el.substr(0, el.size() - 1);
	for (int i = 0; i <= size; i++) {
		if (pdata[i] == st) {
			return true;
		}
	}
	return false;
}