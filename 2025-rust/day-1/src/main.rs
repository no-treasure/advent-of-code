use std::fs;

mod part_one;

pub fn main() {
    let input_string = fs::read_to_string("./input.txt").unwrap();
    let input = input_string.split("\n").collect::<Vec<&str>>();
    println!("{}", part_one::main(&input));
}
