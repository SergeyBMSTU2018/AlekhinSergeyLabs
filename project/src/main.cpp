#include "Func.h"
#include <vector>

std::vector<bool> readInf(size_t inf) {
  std::vector<bool> tmp(4, false);

  size_t j = 3;
  while (inf) {
    if (inf & 1) {
      tmp[j] = true;
    }

    inf = inf / 10;
    --j;
  }

  return tmp;
}

int main() {
  int n = 7;
  int k = 4;
  int in = 1101;
//  std::cin >> n >> k >> in;

  auto inf = readInf(in);
  std::vector<bool> gen{true, false, true, true};

  auto cod = coding(inf, gen, n, k);

  auto table = allErrors(cod, gen);
  printTable(table);

  return 0;
}