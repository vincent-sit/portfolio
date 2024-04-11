import gamepadDefault from '../../assets/gamepad/gamepad.svg';
import gamepadBadInput from '../../assets/gamepad/gamepad_bad_input.svg';
import gamepadGoodInput from '../../assets/gamepad/gamepad_reaction.svg';
import goodInputFx from '../../assets/sfx/success.mp3';
import badInputFx from '../../assets/sfx/error.wav';

export async function reactToButton(validInput : boolean) {
    const element = document.getElementById('controller-pad-img') as HTMLImageElement;
    if (!element) return;
    element.src = validInput ? gamepadGoodInput : gamepadBadInput;
    
    // play sound
    const audio = new Audio( validInput ? goodInputFx : badInputFx );
    audio.play();

    await new Promise(f => setTimeout(f, 400));
    element.src = gamepadDefault;
}
