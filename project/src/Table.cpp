#include "Table.h"
#include <iostream>

int factorial(int n) {
  int fac = 1;
  for (int i = 2; i <= n; ++i)
    fac = fac * i;
  return fac;
}

int findC(int n, int k) {
  return factorial(n) / factorial(k) / factorial(n - k);
}

void findCk(std::vector<Multiplicity> &table) {
  for (auto &&t : table) {
    t.Ck = t.Nk / t.C;
  }
}

void printTable(const std::vector<Multiplicity> &table) {
  for (auto &&t : table) {
    std::cout << "I = " << t.i << ' ';
    std::cout << "C = " << t.C << ' ';
    std::cout << "No = " << t.No << ' ';
    std::cout << "Nk = " << t.Nk << ' ';
    std::cout << "Ck = " << t.Ck << ' ';
    std::cout << std::endl;
  }
}
