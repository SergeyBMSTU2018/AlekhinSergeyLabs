#pragma once
#include <iostream>
#include "string"
#include "Vector.h"

using namespace std;

class MySet : public MyVector {
public:
	friend MySet operator + (MySet& s1, MySet& s2);
	friend MySet operator - (MySet& s1, MySet& s2);
	friend MySet operator*(MySet& s1, MySet& s2);
	MySet& operator-=(MySet&);
	MySet& operator*=(MySet&);
	MySet& operator+=(MySet&);
	bool operator==(MySet&);
	bool is_element(string);
	void delete_element(string);
	MySet();
	MySet(string el);
	MySet(const MySet& mySet);
	MySet& operator = (const MySet& s);
	friend ostream& operator<<(ostream& out, MySet s) {
		//MySet a(s);
		s.sort();
		if (s.size >= 0) {
			out << "{ ";
			for (int i = 0; i < s.size; i++) {
				if (s[i] != "")
					out << s[i];
			}
			out << "} ";
		}
		else {
			cout << "null";
		}
		return out;
	}
};