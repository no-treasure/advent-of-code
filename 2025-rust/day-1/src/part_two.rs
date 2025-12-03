const FULL_CIRCLE: i32 = 100;

pub fn main(input: &Vec<&str>) -> i32 {
    let mut position = 50;
    let mut result = 0;

    for turn in input {
        let direction = turn.chars().next().unwrap();
        let value: i32 = turn[1..].parse().unwrap();

        let first_zero_at = match (direction, position) {
            ('L', 0) => FULL_CIRCLE,
            ('R', 0) => FULL_CIRCLE,
            ('L', p) => p,
            ('R', p) => FULL_CIRCLE - p,
            _ => 0,
        };

        result += if value.ge(&first_zero_at) {
            1 + (value - first_zero_at) / FULL_CIRCLE
        } else {
            0
        };

        position += match direction {
            'L' => -value,
            'R' => value,
            _ => 0,
        };

        position = position.rem_euclid(FULL_CIRCLE);
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn simple_test() {
        let input = vec![
            "L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82",
        ];

        let result = main(&input);
        assert_eq!(result, 6);
    }
}
