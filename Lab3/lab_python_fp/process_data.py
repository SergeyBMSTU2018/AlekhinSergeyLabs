import json
from lab_python_fp.print_result import print_result
from lab_python_fp.cm_timer import cm_timer_1
from lab_python_fp.unique import Unique
from lab_python_fp.field import field
from lab_python_fp.gen_random import gen_random

path = "../data/data_light.json"

with open(path) as f:
    data = json.load(f)


@print_result
def f1(arg):
    return list(Unique(sorted(field(arg, 'job-name'), key=str), ignore_case=True))


@print_result
def f2(arg):
    return list(filter(lambda x: 'программист' in x, arg))


@print_result
def f3(arg):
    return list(map(lambda x: x + ' с опытом Python', arg))


@print_result
def f4(arg):
    return list(map(lambda x: x + ", зарплата " + str(*gen_random(1, 100000, 200000)) + " руб", arg))


if __name__ == '__main__':
    with cm_timer_1():
        f4(f3(f2(f1(data))))
