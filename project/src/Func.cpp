#include "Func.h"
#include <map>

static int shiftLast(int a) {
  return ((a - 1) ^ ((a ^ (a - 1)) >> 2));
}

static int addLast(int a) {
  return (a | (((a ^ (a - 1)) + 1) >> 2));
}

static int nextEl(int a) {
  if ((a & (a + 1)) == 0)
    return 0;

  if (a & 1)
    return addLast(nextEl(a >> 1) << 1);
  else
    return shiftLast(a);
}

static int firstEl(int n, int k) {
  return (((1 << k) - 1) << (n - k));
}

static bool isZero(const std::vector<bool> &syn) {
  return std::all_of(syn.begin(), syn.end(), [](bool i) {
    return !i;
  });
}

static std::vector<bool> intToVec(int a) {
  int b = a;
  size_t j = 6;
  std::vector<bool> tmp(7, false);

  while (b) {
    tmp[j] = (b & 1) != 0;
    b = b >> 1;
    --j;
  }

  return tmp;
}

std::vector<bool> coding(std::vector<bool> &inf, const std::vector<bool> &gen, size_t n, size_t k) {
//  printVec(inf, "Исходный вектор");
//  printVec(gen, "Порождающий полином");

  for (size_t i = 0; i < n - k; ++i) {
    inf.push_back(false);
  }

  auto rem = remOfDiv(inf, gen);
//  printVec(rem, "Остаток");

  auto cyclic = sum(inf, rem);
//  printVec(cyclic, "Циклический вектор");

//  std::cout << std::endl;
  return cyclic;
}

std::vector<bool> decoding(const std::vector<bool> &cod, const std::vector<bool> &err, const std::vector<bool> &gen) {
//  printVec(cod, "Циклический вектор");
//  printVec(err, "Вектор ошибки");
//  printVec(gen, "Порождающий полином");

  auto acc = vecXor(cod, err);
//  printVec(acc, "Принятый полином");

  auto syn = remOfDiv(acc, gen);
//  printVec(syn, "Вектор синдрома");

//  std::cout << std::endl;
  return syn;
}

std::vector<Multiplicity> allErrors(const std::vector<bool> &cod, const std::vector<bool> &gen) {
  const std::map<std::vector<bool>, std::vector<bool>> errTable = {
      {{false, false, true}, {false, false, false, false, false, false, true}},
      {{false, true, false}, {false, false, false, false, false, true, false}},
      {{true, false, false}, {false, false, false, false, true, false, false}},
      {{false, true, true}, {false, false, false, true, false, false, false}},
      {{true, true, false}, {false, false, true, false, false, false, false}},
      {{true, true, true}, {false, true, false, false, false, false, false}},
      {{true, false, true}, {true, false, false, false, false, false, false}},
  };

  std::vector<Multiplicity> table;
  table.reserve(7);

  for (int i = 1; i < 8; ++i) {
    table.emplace_back(i);
  }

  for (size_t i = 1; i <= 7; ++i) {
    auto f = firstEl(7, i);

    for (int j = 0; j < table[i - 1].C; ++j) {
      auto err = intToVec(f);
      auto syn = decoding(cod, err, gen);

      if (!isZero(syn)) {
        table[i - 1].No++;

        if (err == errTable.at(syn)) {
          table[i - 1].Nk++;
        }
      }

      f = nextEl(f);
    }
  }

  findCk(table);

  return table;
}