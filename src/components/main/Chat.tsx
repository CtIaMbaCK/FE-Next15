import CancelIcon from "@mui/icons-material/Cancel";
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextareaAutosize, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CircularProgress from '@mui/material/CircularProgress';


type Message = {
  text: string;
  sender: "user" | "Bot";
};

const CHATBOT_URL = process.env.CHATBOT_URL || "http://127.0.0.1:8000";

export default function Chat() {
  //
  const [chatMessages, setChatMessages] = useState<Message[]>([
    { text: "Xin chào, tôi là trợ lý ảo của trường Đại học Văn Lang. Tôi có thể giúp gì cho bạn hôm nay?", sender: "Bot" },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");

  // 
  const handleSend = async () => {
    console.log(inputText);
    const trimmed = inputText.trim();
    const userType = "students"
    if (!trimmed) return;

    setChatMessages((prev) => [...prev, { text: trimmed, sender: "user" }]);
    setInputText("");
    setLoading(true);

    try {
      const res = await fetch(`${CHATBOT_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: trimmed,
          user_type: userType
        }),// tuy chinh theo cai ben api


      });
      console.log(JSON.stringify({ message: chatMessages }))
      console.log("chat message", chatMessages)

      const data = await res.json();
      console.log("Response from server:", data);
      setChatMessages((prev) => [...prev, { text: data.answer, sender: "Bot" }]);
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setChatMessages((prev) => [
        ...prev,
        { text: "⚠️ Lỗi khi gửi tin nhắn.", sender: "Bot" },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative z-2">
      <div className="bottom-10 right-10 fixed">
        <div className="z-10">
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute lg:bottom-12 lg:right-5 lg:w-350 lg:h-150 shadow-3xl h-120 w-80 -right-4 bottom-10 rounded-2xl flex justify-center items-center"
                key="box"
              >
                <Box className="bg-white lg:w-[98%] lg:h-[96%] w-[98%] h-[98%] rounded-2xl flex flex-col shadow-xl/30">
                  {/* head */}
                  <Box className="bg-[#B02E35] h-12 rounded-t-2xl flex items-center justify-between p-4">
                    <Box className="flex items-center gap-2">
                      <Typography className="text-white font-bold ">
                        VANLANG
                      </Typography>
                      <Typography className="text-white  bg-[#4388FF] flex items-center justify-center px-4 rounded-lg ">
                        Beta
                      </Typography>
                    </Box>
                    <Button
                      sx={{
                        color: "white",
                        ":hover": { backgroundColor: "#B02E35" },
                      }}
                      onClick={() => setIsVisible(false)}
                    >
                      <CancelIcon />
                    </Button>
                  </Box>

                  {/* content */}
                  <Box className="flex-1 overflow-y-auto">
                    <Box className=" w-full relative">

                      {/* chat */}

                      {chatMessages.map((chat, index) => (
                        chat.sender === "user" ? (
                          <Box key={index} className="flex w-full justify-end mb-2">
                            <Box className="flex items-start gap-2 p-4 max-w-[100%]">
                              <Box className="bg-[#1565c0] rounded-lg p-2">
                                <Typography className="text-white break-words">
                                  {chat.text}
                                </Typography>
                              </Box>
                              <Box className="bg-[#1565c0] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                                <PersonIcon className="text-white" />
                              </Box>
                            </Box>
                          </Box>
                        ) : (
                          <Box key={index} className="flex w-full justify-start mb-2">
                            <Box className="flex items-start gap-2 p-4 max-w-[100%]">
                              <Box className="bg-[#1565c0] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                                <SmartToyIcon className="text-white" />
                              </Box>
                              <Box className="bg-[#C4C4C4] rounded-lg p-2">
                                <Typography className="text-white break-words">
                                  {chat.text}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        )
                      ))}

                    </Box>
                  </Box>

                  {/* chat */}
                  <Box className="flex items-center p-4 shadow-xl justify-center w-full relative gap-3">
                    <Box>
                      <AttachFileIcon sx={{
                        transform: "rotate(45deg)",
                      }} />

                    </Box>
                    <TextareaAutosize
                      className="w-full h-12 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                      value={inputText}
                      placeholder=" "
                      maxRows={5}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <Box
                      className="bg-[#B02E35] hover:scale-110 w-8 h-8 rounded-full flex items-center justify-center right-6 bottom-6 cursor-pointer"
                    >
                      {loading ? (
                        <CircularProgress size={20} sx={{ color: 'white' }} />
                      ) : (
                        <SendIcon
                          className="text-white p-1"
                          onClick={handleSend}
                        />
                      )}
                    </Box>
                  </Box>

                </Box>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
        <motion.button
          className="bg-[#B02E35] rounded-full lg:w-12 lg:h-12 w-8 h-8 text-[#0f1115] absolute bottom-[-10px] lg:right-0 -right-5"
          onClick={() => setIsVisible(!isVisible)}
          whileTap={{ y: 10 }}
        >
          {isVisible ? (
            <CancelIcon className="text-white" />
          ) : (
            <Image
              src="/chatbot.png"
              alt="logoChatBot"
              width={1000}
              height={1000}
              className="w-20"
            />
          )}
        </motion.button>
      </div>
    </div>
  );
}
