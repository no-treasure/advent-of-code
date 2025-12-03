use std::fs;

mod part_one;
mod part_two;

pub fn main() {
    let input_string = fs::read_to_string("./input.txt").unwrap();
    let input = input_string.split("\n").collect::<Vec<&str>>();

    println!("part one result: {}", part_one::main(&input));
    println!("part two result: {}", part_two::main(&input));
}
