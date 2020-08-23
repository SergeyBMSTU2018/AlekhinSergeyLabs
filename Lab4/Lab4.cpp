#include "MySet.h"
#include "Vector.h"
using namespace std;

int main() {
	setlocale(0, "RUSSIAN");
	MySet s("Hello!");
	s.add_element("No");
	s.add_element("Yes!");
	s.add_element("Привет!");
	MySet s1("Cat");
	s1.add_element("No");
	s1.add_element("Привет!");
	MySet s2;
	cout << "s: " << s << endl;
	cout << "s1: " << s1 << endl;
	s2 = s - s1;
	cout << "s2 =  s - s1: " << s2 << endl;
	s2 = s1 - s;
	cout << "Мs2 =  s1 - s: " << s2 << endl;
	s2 = s + s1;
	cout << "s2 =  s + s1: " << s2 << endl;
	s2 = s1 + s;
	cout << "s2 =  s1 + s: " << s2 << endl;
	s2 = s1 * s;
	cout << "s2 =  s1 * s: " << s2 << endl;
	s2 = s * s1;
	cout << "s2 =  s * s1: " << s2 << endl;
	MySet s3(s2);
	cout << "s3 =  s2: " << s3 << endl;
	if (s3 == s2) { cout << "s3 = s2" << endl; }
	if (s3 == s1) { cout << "s3 = s21" << endl; }
	string a;
	MySet m1;
	MySet m2;
	MySet m3;
	bool b = true;
	while (b) {
		cout << "Введите элемент множества 1: ";
		cin >> a;
		if (a == "stop") { b = false; }
		else
			m1.add_element(a);
	}
	cout << "m1: " << m1 << endl;
	b = true;
	while (b) {
		cout << "Введите элемент множества 2: ";
		cin >> a;
		if (a == "stop") { b = false; }
		else
			m2.add_element(a);
	}
	cout << "m2: " << m2 << endl;
	m3 = m2 - m1;
	cout << "m3 = m2 - m1:" << m3 << endl;
	m3 = m1 - m2;
	cout << "m3 = m1 - m2:" << m3 << endl;
	m3 = m2 + m1;
	cout << "m3 = m2 + m1:" << m3 << endl;
	m3 = m1 + m2;
	cout << "m3 = m1 + m2:" << m3 << endl;
	m3 = m1 * m2;
	cout << "m3 = m1 * m2:" << m3 << endl;
	m3 = m2 * m1;
	cout << "m3 = m2 * m1:" << m3 << endl;
	return 0;
}