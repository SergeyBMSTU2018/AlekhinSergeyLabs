#include "Utils.h"
#include <iostream>

std::vector<bool> vecXor(const std::vector<bool> &l, const std::vector<bool> &r, size_t offset) {
  std::vector<bool> tmp(l);

  for (size_t i = 0; i < r.size(); ++i) {
    tmp[i + offset] = l[i + offset] ^ r[i];
  }

  return tmp;
}

std::vector<bool> remOfDiv(const std::vector<bool> &l, const std::vector<bool> &r) {
  std::vector<bool> tmp(l);

  for (size_t i = 0; i < l.size() - r.size() + 1; ++i) {
    if (tmp[i]) {
      tmp = vecXor(tmp, r, i);
    }
  }

  int count = tmp.size();
  tmp.erase(tmp.begin(), std::remove_if(tmp.begin(), tmp.end(), [&count](int i) {
    return --count > 3;
  }));

  return tmp;
}

std::vector<bool> sum(const std::vector<bool> &l, const std::vector<bool> &r) {
  std::vector<bool> tmp(l);

  size_t offset = l.size() - r.size();

  for (size_t i = 0; i < r.size(); ++i) {
    tmp[i + offset] = l[i + offset] | r[i];
  }

  return tmp;
}

void printVec(const std::vector<bool> &vec, const std::string &str) {
  std::cout << str << " = ";

  for (auto &&i : vec) {
    std::cout << i;
  }

  std::cout << std::endl;
}