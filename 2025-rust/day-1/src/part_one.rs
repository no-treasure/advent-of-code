const FULL_CIRCLE: i32 = 100;

pub fn main(input: &Vec<&str>) -> i32 {
    let mut position = 50;
    let mut result = 0;

    for turn in input {
        let direction = turn.chars().next().unwrap();
        let value: i32 = turn[1..].parse().unwrap();

        match direction {
            'L' => position -= value,
            'R' => position += value,
            _ => {}
        }

        position = position.rem_euclid(FULL_CIRCLE);

        if position == 0 {
            result += 1;
        }
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_simple_right_turn() {
        let input = vec![
            "L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82",
        ];

        let result = main(&input);
        assert_eq!(result, 3);
    }
}
