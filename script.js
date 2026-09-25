// ======================================================
// SUPABASE CONNECTION
// ======================================================

const SUPABASE_URL =
    "https://hrjvgivrflycrzbwizcd.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_8BRrNMnMTAeAYZbNhuak9w_VkTgOYD3";


const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ======================================================
// SETTINGS
// ======================================================

const CHAT_PASSWORD = "0209";

const ROOM_ID = "private-room-1";

let currentSender = "Nitin";


// ======================================================
// PAGE ELEMENTS
// ======================================================

const passwordPage =
    document.getElementById("passwordPage");

const chatPage =
    document.getElementById("chatPage");

const passwordInput =
    document.getElementById("passwordInput");

const passwordError =
    document.getElementById("passwordError");

const messagesBox =
    document.getElementById("messages");

const messageInput =
    document.getElementById("messageInput");

const chatStatus =
    document.getElementById("chatStatus");

const emptyChat =
    document.getElementById("emptyChat");


// ======================================================
// PASSWORD
// ======================================================

function unlockChat() {

    const password =
        passwordInput.value.trim();

    if (password === CHAT_PASSWORD) {

        passwordPage.classList.add("hidden");

        chatPage.classList.remove("hidden");

        passwordError.textContent = "";

        startChat();

    } else {

        passwordError.textContent =
            "Wrong password. Try again.";

        passwordInput.value = "";

        passwordInput.focus();
    }
}


// Enter key on password

passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            unlockChat();

        }

    }
);


// ======================================================
// BACK
// ======================================================

function backToPassword() {

    chatPage.classList.add("hidden");

    passwordPage.classList.remove("hidden");

    passwordInput.value = "";

}


// ======================================================
// ANONYMOUS LOGIN
// ======================================================

async function startChat() {

    chatStatus.textContent =
        "Connecting...";

    try {

        const {
            data: sessionData,
            error: sessionError
        } =
            await supabaseClient.auth.getSession();


        if (sessionError) {

            throw sessionError;

        }


        // Already logged in anonymously

        if (sessionData.session) {

            chatStatus.textContent = "";

            await loadMessages();

            return;
        }


        // Create anonymous user

        const {
            data,
            error
        } =
            await supabaseClient.auth.signInAnonymously();


        if (error) {

            throw error;

        }


        console.log(
            "Anonymous user connected:",
            data.user.id
        );


        chatStatus.textContent = "";

        await loadMessages();

    } catch (error) {

        console.error(error);

        chatStatus.textContent =
            "Connection error: " + error.message;
    }
}


// ======================================================
// SENDER SELECTOR
// ======================================================

function setSender(name) {

    currentSender = name;


    const nitinButton =
        document.getElementById("nitinButton");

    const beautifulButton =
        document.getElementById("beautifulButton");


    nitinButton.classList.remove(
        "name-active"
    );

    beautifulButton.classList.remove(
        "name-active"
    );


    if (name === "Nitin") {

        nitinButton.classList.add(
            "name-active"
        );

    } else {

        beautifulButton.classList.add(
            "name-active"
        );
    }
}


// ======================================================
// LOAD MESSAGES
// ======================================================

async function loadMessages() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("messages")
            .select("*")
            .eq("room_id", ROOM_ID)
            .order(
                "created_at",
                {
                    ascending: true
                }
            );


    if (error) {

        console.error(error);

        chatStatus.textContent =
            error.message;

        return;
    }


    messagesBox.innerHTML = "";


    if (!data || data.length === 0) {

        showEmptyMessage();

        return;
    }


    data.forEach(
        message => {

            displayMessage(message);

        }
    );


    scrollToBottom();
}


// ======================================================
// EMPTY CHAT
// ======================================================

function showEmptyMessage() {

    messagesBox.innerHTML = `

        <div class="empty-chat">

            <div>♡</div>

            <p>
                No messages yet.
            </p>

            <small>
                Start the conversation...
            </small>

        </div>

    `;
}


// ======================================================
// DISPLAY MESSAGE
// ======================================================

function displayMessage(message) {

    const div =
        document.createElement("div");


    const isNitin =
        message.sender_name === "Nitin";


    div.className =
        "message " +
        (
            isNitin
                ? "nitin"
                : "beautiful"
        );


    const time =
        new Date(
            message.created_at
        ).toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    div.innerHTML = `

        <div class="message-name">
            ${escapeHTML(
                message.sender_name
            )}
        </div>

        <div class="message-text">
            ${escapeHTML(
                message.message
            )}
        </div>

        <div class="message-time">
            ${time}
        </div>

    `;


    messagesBox.appendChild(div);
}


// ======================================================
// SEND MESSAGE
// ======================================================

async function sendMessage() {

    const text =
        messageInput.value.trim();


    if (!text) {

        return;
    }


    chatStatus.textContent =
        "Sending...";


    try {

        const {
            data,
            error
        } =
            await supabaseClient.auth.getUser();


        if (error || !data.user) {

            throw new Error(
                "Chat connection lost. Refresh the page."
            );
        }


        const {
            error: insertError
        } =
            await supabaseClient
                .from("messages")
                .insert({

                    user_id:
                        data.user.id,

                    sender_name:
                        currentSender,

                    message:
                        text,

                    room_id:
                        ROOM_ID
                });


        if (insertError) {

            throw insertError;
        }


        messageInput.value = "";

        chatStatus.textContent = "";

        await loadMessages();


    } catch (error) {

        console.error(error);

        chatStatus.textContent =
            error.message;
    }
}


// ======================================================
// ENTER TO SEND
// ======================================================

function handleEnter(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();
    }
}


// ======================================================
// AUTO REFRESH
// ======================================================

// Every 2 seconds check for new messages.

setInterval(
    async function() {

        if (
            !chatPage.classList.contains(
                "hidden"
            )
        ) {

            await loadMessages();

        }

    },
    2000
);


// ======================================================
// SCROLL
// ======================================================

function scrollToBottom() {

    messagesBox.scrollTop =
        messagesBox.scrollHeight;
}


// ======================================================
// BASIC HTML ESCAPE
// ======================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}