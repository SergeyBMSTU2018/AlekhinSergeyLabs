#pragma once

#include <vector>
#include "Table.h"
#include "Utils.h"

std::vector<bool> coding(std::vector<bool> &inf, const std::vector<bool> &gen, size_t n, size_t k);
std::vector<bool> decoding(const std::vector<bool> &cod, const std::vector<bool> &err, const std::vector<bool> &gen);
std::vector<Multiplicity> allErrors(const std::vector<bool> &cod, const std::vector<bool> &gen);
