import { TaskColor } from "@/types/task"

interface ColorPickerProps {
  selectedColor: string
  onColorSelect: (color: TaskColor) => void
}

export function ColorPicker({ selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '1', value: 'bg-red-500 hover:bg-red-600', label: 'Red' });
        }}
        className={`h-8 w-8 rounded-full bg-red-500 hover:bg-red-600 transition-transform hover:scale-110 ${
          selectedColor === 'bg-red-500 hover:bg-red-600' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Red color"
        aria-pressed={selectedColor === 'bg-red-500 hover:bg-red-600'}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '2', value: 'bg-orange-500 hover:bg-orange-600', label: 'Orange' });
        }}
        className={`h-8 w-8 rounded-full bg-orange-500 hover:bg-orange-600 transition-transform hover:scale-110 ${
          selectedColor === 'bg-orange-500 hover:bg-orange-600' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Orange color"
        aria-pressed={selectedColor === 'bg-orange-500 hover:bg-orange-600'}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '3', value: 'bg-yellow-500 hover:bg-yellow-600', label: 'Yellow' });
        }}
        className={`h-8 w-8 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-transform hover:scale-110 ${
          selectedColor === 'bg-yellow-500 hover:bg-yellow-600' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Yellow color"
        aria-pressed={selectedColor === 'bg-yellow-500 hover:bg-yellow-600'}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '4', value: 'bg-green-500 hover:bg-green-600', label: 'Green' });
        }}
        className={`h-8 w-8 rounded-full bg-green-500 hover:bg-green-600 transition-transform hover:scale-110 ${
          selectedColor === 'bg-green-500 hover:bg-green-600' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Green color"
        aria-pressed={selectedColor === 'bg-green-500 hover:bg-green-600'}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '5', value: 'bg-blue-500 hover:bg-blue-600', label: 'Blue' });
        }}
        className={`h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600 transition-transform hover:scale-110 ${
          selectedColor === 'bg-blue-500 hover:bg-blue-600' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Blue color"
        aria-pressed={selectedColor === 'bg-blue-500 hover:bg-blue-600'}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '5', value: 'bg-indigo-500 hover:bg-indigo-600', label: 'Indigo' })
        }}
        className={`h-8 w-8 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-transform hover:scale-110 ${
          selectedColor === 'bg-indigo-500 hover:bg-indigo-600' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Indigo color"
        aria-pressed={selectedColor === 'bg-indigo-500 hover:bg-indigo-600'}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '6', value: 'bg-purple-500 hover:bg-purple-600', label: 'Purple' });
        }}
        className={`h-8 w-8 rounded-full bg-purple-500 hover:bg-purple-600 transition-transform hover:scale-110 ${
          selectedColor === 'bg-purple-500 hover:bg-purple-600' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Purple color"
        aria-pressed={selectedColor === 'bg-purple-500 hover:bg-purple-600'}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '7', value: 'bg-pink-500 hover:bg-pink-600', label: 'Pink' });
        }}
        className={`h-8 w-8 rounded-full bg-pink-500 hover:bg-pink-600 transition-transform hover:scale-110 ${
          selectedColor === 'bg-pink-500 hover:bg-pink-600' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Pink color"
        aria-pressed={selectedColor === 'bg-pink-500 hover:bg-pink-600'}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onColorSelect({ id: '8', value: 'bg-amber-800 hover:bg-amber-900', label: 'Brown' });
        }}
        className={`h-8 w-8 rounded-full bg-amber-800 hover:bg-amber-900 transition-transform hover:scale-110 ${
          selectedColor === 'bg-amber-800 hover:bg-amber-900' ? "ring-2 ring-offset-2 ring-primary" : ""
        }`}
        aria-label="Select Brown color"
        aria-pressed={selectedColor === 'bg-amber-800 hover:bg-amber-900'}
      />
    </div>
  )
}

