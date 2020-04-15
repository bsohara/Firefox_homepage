const hour = document.querySelector('.hour');
const mins = document.querySelector('.mins');

function setHours()
{
    const now = new Data();

    const hr = now.getHours();
    const mn = now.getMinutes();

    if (hr > 23)
    {
        hour.innerHTML = hr - 23;
    }
    else
    {
        hour.innerHTML = hr;
    }

    if (mn >= 10)
    {
        mins.innerHTML = mn;
    }
    else
    {
        mins.innerHTML = '0' + mn;
    }
}

setInterval(setHours, 1000);
