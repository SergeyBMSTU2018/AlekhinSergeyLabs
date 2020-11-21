#pragma once

#include <cstdio>
#include <vector>

int factorial(int n);
int findC(int n, int k);

struct Multiplicity {
  explicit Multiplicity(size_t i)
      : i(i),
        C(findC(7, i)),
        Nk(0),
        No(0),
        Ck(0) {
  }

  size_t i;
  int C;
  int Nk;
  int No;
  int Ck;
};

void findCk(std::vector<Multiplicity> &table);
void printTable(const std::vector<Multiplicity> &table);
