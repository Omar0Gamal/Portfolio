package me.cmplayMC.OSAC.checks.movement;

import me.cmplayMC.OSAC.checks.CheckResult;
import me.cmplayMC.OSAC.checks.CheckType;
import me.cmplayMC.OSAC.checks.MoveCheck;
import me.cmplayMC.OSAC.util.Distance;
import me.cmplayMC.OSAC.util.MovementUtil;
import me.cmplayMC.OSAC.util.User;

public class Glide extends MoveCheck {

	public static final CheckResult PASS = new CheckResult(false, CheckType.GLIDE, "");
	
	public Glide() {
		super(CheckType.GLIDE);
	}
	
	public CheckResult runCheck(User user, Distance distance) {
		final double oldY = user.oldY;
//		user.wasGoingUp = distance.getFrom().getY() > distance.getTo().getY();
		user.oldY = distance.getYDifference();
		if (distance.getFrom().getY() > distance.getTo().getY()) {
			if (oldY >= distance.getYDifference() && oldY != 0 && !MovementUtil.shouldNotFlag(distance.getTo())) {
				return new CheckResult(true, CheckType.GLIDE, "tried to glide; " + oldY + " <= " + user.oldY);
			}
		} else {
			user.oldY = 0;
		}
		return PASS;
	}
	
}
